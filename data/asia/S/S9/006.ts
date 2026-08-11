import { Card } from "models/database/card"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "草苗龜",
		'ja-jp': "ナエトル"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		'zh-tw': "用全身進行光合作用，製造氧氣。當口渴的時候， 頭上的葉子就會枯萎。",
		'ja-jp': "全身で 光合成を して 酸素を 作る。 のどが 渇くと 頭の 葉っぱが しおれてしまう。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "咬住",
			'ja-jp': "かみつく"
		},

		damage: 10,
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "魯莽頭擊",
			'ja-jp': "とびだしヘッド"
		},

		damage: 20,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 605857,
				tcgplayer: 569634,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Common",
	dexId: [387],
}

export default card