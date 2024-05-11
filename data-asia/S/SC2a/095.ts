import { Card } from "../../../interfaces"
import Set from "../SC2a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "臭臭泥"
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	description: {
		'zh-tw': "總之就是臭得讓人不敢用鼻子呼吸。但是也存在著少數覺得這味道很不錯的臭臭泥愛好者。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "三倍毒"
		},

		effect: {
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。因這個【中毒】而放置的傷害指示物的數量改為3個。"
		},

		cost: ["Darkness"]
	}, {
		name: {
			'zh-tw': "污泥旋渦"
		},

		damage: 120,
		cost: ["Darkness", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "D"
}

export default card
