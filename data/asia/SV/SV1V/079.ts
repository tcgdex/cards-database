import { Card } from "models/database/card"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "タマンチュラ"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	dexId: [917],
	hp: 40,
	types: ["Grass"],

	description: {
		'ja-jp': "お尻から 出す 糸は ワイヤーに 匹敵する 強度。 強さの 秘密が 研究されているのだ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'ja-jp': "いとをはく"
		},

		damage: 20,

		effect: {
			'ja-jp': "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693154,
				tcgplayer: 568305,
			},
		},
	],

	retreat: 1
}

export default card