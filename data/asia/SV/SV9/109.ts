import { Card } from "models/database/card"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "Nのレシラム"
	},

	illustrator: "Bun Toujo",
	rarity: "None",
	category: "Pokemon",
	dexId: [643],
	hp: 130,
	types: ["Dragon"],

	description: {
		'ja-jp': "人が 真実を 蔑ろにして 欲に まみれると 炎で 国を 焼きつくすと 神話に 描かれた。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire", "Lightning"],

		name: {
			'ja-jp': "パワーレイジ"
		},

		damage: "20×",

		effect: {
			'ja-jp': "このポケモンにのっているダメカンの数×20ダメージ。"
		}
	}, {
		cost: ["Fire", "Fire", "Lightning", "Colorless"],

		name: {
			'ja-jp': "イノセントフレイム"
		},

		damage: 170
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 807696,
				tcgplayer: 614985,
			},
		},
	],

	retreat: 2
}

export default card