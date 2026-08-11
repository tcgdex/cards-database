import { Card } from "models/database/card"
import Set from "../SVDs"

const card: Card = {
	set: Set,

	name: {
		'th-th': "โนโนะคุราเกะ",
		'id-id': "Toedscool"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'th-th': "อาศัยอยู่ในป่าชื้น ส่วนพลิ้วของร่างกายที่หลุดร่วงนั้นเคี้ยวเพลินและอร่อยมาก",
		'id-id': "Toedscool hidup di dalam hutan yang lembap. Embel-embel yang terkelupas dari tubuhnya bertekstur kenyal dan sangat lezat."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'th-th': "ดีด",
			'id-id': "Tendangan Penghempas"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			'th-th': "สาดโคลน",
			'id-id': "Semprotan Lumpur"
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