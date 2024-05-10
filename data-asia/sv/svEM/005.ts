import { Card } from "../../../interfaces"
import Set from "../svEM"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "天然鳥"
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		'zh-tw': "能夠看穿過去和未來。日復一日注視著太陽 動向的奇異寶可夢。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "虛寂意識"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用1次。從自己的手牌選擇1張「基本【超】能量」卡，附於備戰寶可夢身上。然後，從自己的牌庫抽出2張卡。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "超念力"
		},

		damage: 80,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card