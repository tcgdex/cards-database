import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "เคโคโอ",
		id: "Finneon"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		th: "ผิวส่วนที่เป็นสีชมพูจะส่องแสงได้โดยการสะสมแสงจากดวงอาทิตย์ ว่ากันว่าเอาไว้ใช้พรางตัว",
		id: "Bagian kulit berwarna merah muda Finneon mengumpulkan sinar matahari lalu bersinar. Dikatakan bahwa hal ini dilakukan untuk kamuflase."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ราดน้ำ",
			id: "Percikan Air"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card