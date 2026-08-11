import { Card } from "models/database/card"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ブラックキュレムex"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 230,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'ja-jp': "アイスエイジ"
		},

		damage: 90,

		effect: {
			'ja-jp': "相手のバトルポケモンがポケモンなら、そのポケモンをマヒにする。"
		}
	}, {
		cost: ["Water", "Water", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ブラックフロスト"
		},

		damage: 250,

		effect: {
			'ja-jp': "このポケモンにも30ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 788050,
				tcgplayer: 579459,
			},
		},
	],

	retreat: 3,
	rarity: "None"
}

export default card