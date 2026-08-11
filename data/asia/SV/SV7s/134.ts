import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "ฮิโนยาโคมะ",
		id: "Fletchinder"
	},

	illustrator: "Julie Hang",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		th: "ครอบครองอาณาเขตที่มีรัศมีราว 2-3 กิโลเมตร จะไม่ยกโทษให้กับโปเกมอนนกที่รุกล้ำเข้ามาในอาณาเขตของตน",
		id: "Fletchinder memiliki wilayah teritorial berjarak radius 2–3 km. Pokémon ini tanpa ampun menyerbu Pokémon burung yang memasuki wilayah teritorialnya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			th: "บินเร็วจี๋",
			id: "Terbang Cepat"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card