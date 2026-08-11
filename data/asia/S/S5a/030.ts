import { Card } from "../../../interfaces"
import Set from "../S5a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "迷布莉姆",
		th: "มิบริม"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "喜歡沒有人煙的地方。一旦感覺到強烈的情感，就會一溜煙地逃走。",
		th: "ชอบสถานที่ไม่ค่อยมีคน ถ้ารู้สึกถึงอารมณ์ที่รุนแรงก็จะวิ่งหน้าตั้งหนีไปเลย"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "精神射擊",
			th: "ไซโคช็อต"
		},

		damage: 20,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card