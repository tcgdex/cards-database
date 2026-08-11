import { Card } from "models/database/card"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "闇黑酋雷姆ex",
		'zh-cn': "闇黑酋雷姆ex",
		'ja-jp': "ブラックキュレムex"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 230,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "冰河期",
			'zh-cn': "冰河期",
			'ja-jp': "アイスエイジ"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢為【龍】寶可夢，則將那隻寶可夢【麻痺】。",
			'zh-cn': "若對手的戰鬥寶可夢為【龍】寶可夢，則將那隻寶可夢【麻痺】。",
			'ja-jp': "相手のバトルポケモンがポケモンなら、そのポケモンをマヒにする。"
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "闇黑冰霜",
			'zh-cn': "闇黑冰霜",
			'ja-jp': "ブラックフロスト"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到30點傷害。",
			'zh-cn': "這隻寶可夢也受到30點傷害。",
			'ja-jp': "このポケモンにも30ダメージ。"
		},

		damage: 250,
		cost: ["Water", "Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 787571,
				tcgplayer: 579393,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "Double rare"
}

export default card