import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "化石翼龍"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'zh-tw': "古代的凶猛寶可夢。據說即使是當今的科學， 也無法將牠完美地復原。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "直擊彈"
		},

		effect: {
			'zh-tw': "對手的1隻寶可夢受到50點傷害。[在備戰區不計算弱點・抵抗力。]"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "噴射俯衝"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 120,
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
	regulationMark: "F"
}

export default card