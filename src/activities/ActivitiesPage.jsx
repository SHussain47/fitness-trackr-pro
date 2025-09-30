import { useState, useEffect } from "react";
import { getActivities } from "../api/activities";
import { useAuth } from "../auth/AuthContext";

import ActivityList from "./ActivityList";
import ActivityForm from "./ActivityForm";

export default function ActivitiesPage() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useAuth();

  const syncActivities = async () => {
    setLoading(true);
    try {
      const data = await getActivities();
      setActivities(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    syncActivities();
  }, []);

  return (
    <>
      <h1>Activities</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ActivityList activities={activities} syncActivities={syncActivities} />
      )}
      {token && <ActivityForm syncActivities={syncActivities} />}
    </>
  );
}
