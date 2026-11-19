import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "チュリネ",
		'zh-tw': "百合根娃娃"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	dexId: [548],
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "頭の 葉は 薬として 重宝されたり。 天日で 乾かし 煎じて 飲むと 苦けれども 疲労回復に 効果抜群。",
		'zh-tw': "頭上的葉片是人們愛用的藥材。 在太陽下曬乾後煎煮服用， 雖然味苦但能有效地消除疲勞。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			ja: "スピンターン",
			'zh-tw': "旋轉迴旋"
		},

		effect: {
			ja: "このポケモンをベンチポケモンと入れ替える。",
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。"
		},

		damage: 10,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 650965,
				tcgplayer: 569760,
				cardtrader: 234071,
			},
		},
	]
}

export default card