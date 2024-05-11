import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "利歐路",
		th: "ริโอลุ"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'zh-tw': "精力充沛，可以奔跑一整夜。由於牠十分活潑， 帶牠散步的人非常辛苦。",
		th: "มีความทรหดขนาดวิ่งได้ทั้งคืน มีพลังล้นเหลือจนคนที่ไปเดินเล่นด้วยเหนื่อย"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "踢倒",
			th: "เตะเลียด"
		},

		damage: 50,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card