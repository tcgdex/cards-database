import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ダルマッカ"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "osare",
	dexId: [554],
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "体の 中で 燃える 炎が パワーの 源。 火が 小さく なると たちまち 眠ってしまう。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "かいりき"
		},

		damage: 10
	}, {
		cost: ["Fire", "Fire"],

		name: {
			ja: "ほのおタックル"
		},

		damage: 50,

		effect: {
			ja: "このポケモンにも20ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2
}

export default card
