import { Link } from "react-router";

export default function ActivityList({ activities, syncActivities }) {
  return (
    <ul>
      {activities.map((activity) => (
        <ActivityListItem
          key={activity.id}
          activity={activity}
        />
      ))}
    </ul>
  );
}

function ActivityListItem({ activity }) {
  // console.log(activity);

  return (
    <li>
      <Link to={`/activity/${activity.id}`} className="list-item">{activity.name}</Link>
    </li>
  );
}
