import { Card } from "../../../interfaces"
import Set from "../S10a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "烏鴉頭頭"
	},

	illustrator: "aoki",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'zh-tw': "與敵人的戰鬥幾乎全由手下來應付。只有在最後給對手致命一擊的時候， 才會弄髒自己的手。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "三重抽出"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出3張卡。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "無情之翼"
		},

		effect: {
			'zh-tw': "若希望，將這隻寶可夢與備戰區的「黑暗鴉」互換。"
		},

		damage: 120,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card