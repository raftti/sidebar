import AutoSelect from "../components/auto-select/AutoSelect";
import Calendar from "../components/calendar/Calendar";
import RoomFilters from "../components/filter-data/RoomFilters";
import styles from "../app/App.module.css";

function App() {
  const filtersData = [
    {
      id: 8,
      title: "Помещения",
      sidebar_filters: {
        "Популярные фильтры": {
          Вместимость: {
            type: "one_select",
            name: "count_peoples__contains",
            values: [
              {
                name: "До 20 человек",
                state: false,
              },
              {
                name: "От 20 до 50",
                state: false,
              },
              {
                name: "Больше 50",
                state: false,
              },
            ],
          },
          "Площадь (кв.м)": {
            type: "range",
            name: "square__lte",
            values: [
              {
                min: 30,
                max: 225,
                from: 123,
                step: 5,
                state: 123,
              },
            ],
          },
        },
        Дополнительно: {
          Зонирование: {
            type: "multi_select",
            name: "zoning__contains",
            values: [
              {
                name: "Место для игр",
                state: false,
              },
              {
                name: "Место для переодевания",
                state: false,
              },
              {
                name: "Место для красивых фото",
                state: false,
              },
              {
                name: "Тихий уголок для взрослых",
                state: false,
              },
            ],
          },
          Условия: {
            type: "multi_select",
            name: "conditions__contains",
            values: [
              {
                name: "Закрывается под нас",
                state: false,
              },
              {
                name: "Отдельный вход",
                state: false,
              },
              {
                name: "Можно со своей едой",
                state: false,
              },
              {
                name: "Можно со своим фотографом/аниматором",
                state: false,
              },
              {
                name: "Можно украсить самим",
                state: false,
              },
              {
                name: "Уборка после включена",
                state: false,
              },
            ],
          },
        },
      },
    },
  ];
  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  return (
    <div className={styles.sideBar}>
      <div>
        {filtersData.map((el) => (
          <h2 key={el.id}>{el.title}</h2>
        ))}
        <span className={styles.title}></span>
      </div>

      <div className={styles.calendar}>
        <div className={styles.container}>
          <span className={styles.simpleText}>Дата и время праздника</span>
          <Calendar />
        </div>
      </div>

      <div className={styles.dateSelectCount}>
        <div className={styles.container}>
          <span className={styles.simpleText}>Начнем в</span>
          <AutoSelect placeholder="10:00" options={options} />
        </div>
        <div className={styles.container}>
          <span className={styles.simpleText}>Закончим в</span>
          <AutoSelect placeholder="12:00" options={options} />
        </div>
      </div>

      <div className={styles.container}>
        <span className={styles.simpleText}>Район</span>
        <AutoSelect placeholder="Любой" options={options} />
      </div>

      <div>
        <RoomFilters data={filtersData} />
      </div>
    </div>
  );
}

export default App;
