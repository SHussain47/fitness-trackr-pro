import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { getActivityById, deleteActivity } from "../api/activities";
import { useAuth } from "../auth/AuthContext";

export default function ActivityDetails() {
  const { token } = useAuth();
  const { id } = useParams();
  const [activity, setActivity] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function getActivity() {
      try {
        setError(null);
        setLoading(true);
        const activity = await getActivityById(id);
        setActivity(activity);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    getActivity();
  }, [id]);

  const tryDelete = async () => {
    try {
      setError(null);
      await deleteActivity(token, activity.id);
      navigate("/ActivitiesPage");
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <>
        <p>Error: {error}</p>
        <button onClick={() => navigate(-1)}>Back</button>
      </>
    );

  return (
    <div className="details">
      <h2>{activity.name}</h2>
      <p>by {activity.creatorName}</p>
      <p>{activity.description}</p>
      <div className="action-btns">
        <button onClick={() => navigate(-1)} className="action-back">Back</button>
        {token && <button onClick={tryDelete} className="action-delete">Delete</button>}
      </div>
    </div>
  );
}
