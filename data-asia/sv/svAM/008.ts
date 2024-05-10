import { Card } from "../../../interfaces"
import Set from "../svAM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "利歐路",
		th: "ริโอลุ",
		id: "Riolu"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'zh-tw': "夥伴們之間會透過發出波導來與彼此溝通。 跑步可以跑上一整晚。",
		th: "ใช้คลื่นพลังในการสื่อสารกับพวกเดียวกัน สามารถวิ่งติดต่อกันได้ทั้งคืน",
		id: "Riolu mengeluarkan gelombang aura untuk berkomunikasi dengan kawannya. Pokémon ini dapat terus berlari sepanjang malam."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "拳",
			th: "หมัดแย็บ",
			id: "Jab"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "踢倒",
			th: "เตะเลียด",
			id: "Tendangan Rendah"
		},

		damage: 20,
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card