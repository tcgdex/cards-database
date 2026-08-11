import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "コイキング"
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	dexId: [129],
	hp: 30,
	types: ["Water"],

	description: {
		'ja-jp': "力のない 情けない ポケモン。 たまに 高く 飛び跳ねても ２メートルを 超すのが やっとだ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'ja-jp': "はねじょうず"
		},

		damage: "10＋",

		effect: {
			'ja-jp': "コインを2回投げ、すべてオモテなら、20ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 701536,
				tcgplayer: 568203,
			},
		},
	],

	retreat: 1,
}

export default card