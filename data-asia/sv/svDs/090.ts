import { Card } from "../../../interfaces"
import Set from "../svDs"

const card: Card = {
	set: Set,

	name: {
		th: "โนโนะคุราเกะ",
		id: "Toedscool"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		th: "อาศัยอยู่ในป่าชื้น ส่วนพลิ้วของร่างกายที่หลุดร่วงนั้นเคี้ยวเพลินและอร่อยมาก",
		id: "Toedscool hidup di dalam hutan yang lembap. Embel-embel yang terkelupas dari tubuhnya bertekstur kenyal dan sangat lezat."
	},

	stage: "Basic",

	attacks: [{
		name: {
			th: "ดีด",
			id: "Tendangan Penghempas"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			th: "สาดโคลน",
			id: "Semprotan Lumpur"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card