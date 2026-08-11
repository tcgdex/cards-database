import { Card } from "../../../interfaces"
import Set from "../SC1D"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "沙螺蟒"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'zh-tw': "蜷縮身體後從鼻孔裡噴射出１００公斤的沙子。沒有了沙子就會變得很懦弱。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "砂囊"
		},

		effect: {
			'zh-tw': "這隻寶可夢受到招式的傷害「-30」點。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "力量壓制"
		},

		effect: {
			'zh-tw': "若身上附有的【鬥】能量比使用這個招式所需的能量多1個，則增加70點傷害。"
		},

		damage: "60+",
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
