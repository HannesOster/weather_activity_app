export default function List({ activities, onDeleteActivity }) {
  return (
    <ul className="list">
      {activities.map((activity) => {
        return (
          <li className="list-item" key={activity.id}>
            {activity.name}
            <button onClick={() => onDeleteActivity(activity.id)}>❌</button>
          </li>
        );
      })}
    </ul>
  );
}
