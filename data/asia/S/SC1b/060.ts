import { Card } from "../../../interfaces"
import Set from "../SC1b"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "巨鉗蟹"
	},

	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		'zh-tw': "雖然堅硬的鉗子有著１萬馬力的力量，但尺寸太大讓牠行動遲緩。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "沉甸鉗"
		},

		effect: {
			'zh-tw': "將對手的牌庫上方1張卡丟棄。"
		},

		damage: 40,
		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "抓裂"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢身上放置有傷害指示物，則增加60點傷害。"
		},

		damage: "90+",
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card
