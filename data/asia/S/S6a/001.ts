import { Card } from "../../../interfaces"
import Set from "../S6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "凱羅斯"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'zh-tw': "雖然很強壯，但弱點是怕冷。到了晚上就會把身體埋在樹葉堆裡睡覺。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "虎鉗特訓"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的「一擊」寶可夢使用招式的傷害，不計算對手的戰鬥寶可夢的抵抗力。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "地球上投"
		},

		damage: 110,
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card