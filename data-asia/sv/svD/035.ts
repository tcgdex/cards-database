import { Card } from "../../../interfaces"
import Set from "../svD"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷丘"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	description: {
		'zh-tw': "尾巴會發揮接地線的作用把電氣導入地面， 所以自己不會被電得發麻。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "電氣充能"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張「基本【雷】能量」卡，附於這隻寶可夢身上。並且重洗牌庫。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "十萬伏特"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的能量卡全部丟棄。"
		},

		damage: 200,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card