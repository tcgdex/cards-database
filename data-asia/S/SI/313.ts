import { Card } from "../../../interfaces"
import Set from "../SI"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "藏瑪然特V"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "王者之勢"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用1次，若使用，則自己的回合結束。將自己的手牌全部丟棄，從牌庫抽出5張卡。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "復仇暴擊"
		},

		effect: {
			'zh-tw': "增加對手已經獲得的獎賞卡的張數×30點傷害。"
		},

		damage: "120+",
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card