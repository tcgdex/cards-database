import { Card } from "../../../interfaces"
import Set from "../S5I"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "戴魯比",
		th: "เดลวิล"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'zh-tw': "會在天亮前反覆發出令人不寒而慄的長嚎，藉此強調自己群體的存在。",
		th: "จะส่งเสียงหอนอันชวนขนลุกในช่วงเช้ามืด เพื่อบ่งบอกตัวตนของฝูง"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "咬住",
			th: "กัดติด"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card