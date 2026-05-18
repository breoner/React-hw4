function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map((item) => {
          return (
            <li className="item" key={item.id} style = {{backgroundColor: getRandomHexColor()}}>
              <span className="label">{item.label}</span>
              <span className="percentage">{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Statistics;