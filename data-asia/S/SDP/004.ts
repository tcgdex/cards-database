import { Card } from "../../../interfaces"
import Set from "../SDP"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "倫琴貓"
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 150,
	types: ["Lightning"],

	description: {
		'zh-tw': "擁有透視能力的寶可夢。能夠在眨眼間就發現躲在 厚厚牆壁另一側的獵物。"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'zh-tw': "能量粉碎"
		},

		effect: {
			'zh-tw': "造成對手的場上寶可夢身上附加的能量的數量×50點傷害。"
		},

		damage: "50×",
		cost: ["Lightning"]
	}, {
		name: {
			'zh-tw': "閃光衝擊"
		},

		effect: {
			'zh-tw': "自己的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		damage: 110,
		cost: ["Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card