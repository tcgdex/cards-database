import { Card } from "models/database/card"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "皮皮",
		'ja-jp': "ピッピ"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		'zh-tw': "據說如果在滿月的夜晚看見皮皮們聚在一起跳舞， 就能得到幸福。",
		'ja-jp': "満月の夜 ピッピが 集まって ダンスを 踊るようすを 見ると しあわせに なれると 言われている。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "拍擊",
			'ja-jp': "はたく"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "魔法射擊",
			'ja-jp': "マジカルショット"
		},

		damage: 30,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 605892,
				tcgplayer: 569669,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [35],
}

export default card