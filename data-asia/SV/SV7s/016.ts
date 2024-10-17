import { Card } from "../../../interfaces"
import Set from "../SV7s"

const card: Card = {
	set: Set,

	name: {
		th: "คาจิชชู",
		id: "Applin"
	},

	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		th: "อาศัยอยู่ในแอปเปิล พอไม่มีแอปเปิลแล้วจะสูญเสียน้ำในร่างกายและอ่อนแอลง",
		id: "Applin hidup di dalam buah apel. Jika apelnya habis, Pokémon ini akan melemah karena kehilangan cairan tubuhnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ฉีดพ่นน้ำ",
			id: "Menyemprotkan Getah"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card