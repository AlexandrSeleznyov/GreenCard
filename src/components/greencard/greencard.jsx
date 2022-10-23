import { useForm } from "react-hook-form";
import s from "./greencard.module.css";
import hero from "../../image/1.jpg";
import logo1 from "../../image/1_gray.png";
import logo2 from "../../image/4_gray.png";
import logo3 from "../../image/2_gray.png";
import logo4 from "../../image/3_gray.png";
import logo5 from "../../image/5_gray.png";
import logo11 from "../../image/11.png";
import logo22 from "../../image/22.png";
import logo33 from "../../image/33.png";
import logo44 from "../../image/44.png";
import logo55 from "../../image/55.png";
export default function GreenCard() {
  const car = [
    [
      863, 1375, 2376, 3264, 4132, 5186, 6103, 7019, 7189, 7375, 7421, 7488,
      7555,
    ],
    [345, 475, 793, 1110, 1431, 1745, 2066, 2379, 2700, 2877, 3003, 3074, 3197],
    [
      2037, 2703, 4867, 6850, 8833, 10816, 12799, 14782, 16764, 18747, 20550,
      22353, 24156,
    ],
    [
      3244, 4506, 6759, 9013, 11266, 13520, 15773, 18026, 20280, 22533, 24787,
      27040, 29293,
    ],
    [298, 414, 712, 1011, 1309, 1608, 1906, 2205, 2503, 2801, 3100, 3398, 3500],
  ];

  const { register, getValues, watch } = useForm({
    mode: "onBlur",
    defaultValues: {
      period: 0,
      type: 0,
    },
  });
  console.log(watch());
  return (
    <div className={s.container}>
      <div>
        <img src={hero} alt="qqq" />
      </div>
      <h1 style={{ textAlign: "center", color: "green" }}>Green Card</h1>

      <form>
        <select {...register("period")} className={s.select}>
          <option value="">Выберете срок действия полиса</option>
          <option value="0">15 дней</option>
          <option value="1">1 мес.</option>
          <option value="2">2 мес.</option>
          <option value="3">3 мес.</option>
          <option value="4">4 мес.</option>
          <option value="5">5 мес.</option>
          <option value="6">6 мес.</option>
          <option value="7">7 мес.</option>
          <option value="8">8 мес.</option>
          <option value="9">9 мес.</option>
          <option value="10">10 мес.</option>
          <option value="11">11 мес.</option>
          <option value="12">12 мес.</option>
        </select>
        <div style={{ marginBottom: 30 }}></div>
        <label>
          <input
            {...register("type")}
            type="radio"
            alt="image"
            value="0"
            style={{ display: "none" }}
          />

          {getValues("type") === "0" && (
            <img
              src={logo11}
              alt=""
              style={{ marginRight: 20, color: "blue" }}
            />
          )}
          {getValues("type") !== "0" && (
            <img
              src={logo1}
              alt=""
              style={{ marginRight: 20, color: "blue" }}
            />
          )}
        </label>
        <label>
          <input
            {...register("type")}
            type="radio"
            value="1"
            style={{ display: "none" }}
          />
          {getValues("type") === "1" && (
            <img
              src={logo22}
              alt=""
              style={{ marginRight: 20, color: "blue" }}
            />
          )}
          {getValues("type") !== "1" && (
            <img
              src={logo2}
              alt=""
              style={{ marginRight: 20, color: "blue" }}
            />
          )}
        </label>
        <label>
          <input
            {...register("type")}
            type="radio"
            value="2"
            style={{ display: "none" }}
          />
          {getValues("type") === "2" && (
            <img
              src={logo33}
              alt=""
              style={{ marginRight: 20, color: "blue" }}
            />
          )}
          {getValues("type") !== "2" && (
            <img
              src={logo3}
              alt=""
              style={{ marginRight: 20, color: "blue" }}
            />
          )}
        </label>
        <label>
          <input
            {...register("type")}
            type="radio"
            value="3"
            style={{ display: "none" }}
          />
          {getValues("type") === "3" && (
            <img
              src={logo44}
              alt=""
              style={{ marginRight: 20, color: "blue" }}
            />
          )}
          {getValues("type") !== "3" && (
            <img
              src={logo4}
              alt=""
              style={{ marginRight: 20, color: "blue" }}
            />
          )}
        </label>
        <label>
          <input
            {...register("type")}
            type="radio"
            value="4"
            style={{ display: "none" }}
          />
          {getValues("type") === "4" && (
            <img
              src={logo55}
              alt=""
              style={{ marginRight: 20, color: "blue" }}
            />
          )}
          {getValues("type") !== "4" && (
            <img
              src={logo5}
              alt=""
              style={{ marginRight: 20, color: "blue" }}
            />
          )}
        </label>
        <p className={s.output}>
          Стоимость полиса: {car[getValues("type")][getValues("period")]} грн.
        </p>
      </form>
    </div>
  );
}
