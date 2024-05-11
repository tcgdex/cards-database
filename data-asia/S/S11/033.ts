import { Card } from "../../../interfaces"
import Set from "../S11"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "古月鳥"
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		'zh-tw': "雖然擁有一擊定勝負的威力，但因為記性實在太差， 對戰還沒結束就會忘記對手是誰。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "放逐供應"
		},

		effect: {
			'zh-tw': "若自己的放逐區有4張以上的卡，則這隻寶可夢使用招式所需的能量全部消除。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "裝傻噴吐"
		},

		effect: {
			'zh-tw': "這個招式的傷害不計算弱點。"
		},

		damage: 110,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card