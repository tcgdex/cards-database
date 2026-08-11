import { Card } from "models/database/card"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "鑽角犀獸",
		'ja-jp': "サイドン"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'zh-tw': "進化後變得只用後腳就能站立。如果被牠的角刺中， 就連岩石也會被開出洞來。",
		'ja-jp': "進化して 後ろ足だけで 立つようになった。 ツノで 突くと 岩石にも 穴を 開けてしまう。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "角鑽",
			'ja-jp': "つのドリル"
		},

		damage: 30,
		cost: ["Fighting"]
	}, {
		name: {
			'zh-tw': "猛撞",
			'ja-jp': "とっしん"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。",
			'ja-jp': "このポケモンにも30ダメージ。"
		},

		damage: 120,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 609806,
				tcgplayer: 570608,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				tcgplayer: 577625,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "Common",
	dexId: [112],
}

export default card