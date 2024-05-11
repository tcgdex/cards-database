import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 踏冰人偶V"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		name: {
			'zh-tw': "驚嚇之手"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多3張物品卡，在給對手看過後加入手牌。並且重洗牌庫。"
		},

		cost: ["Water"]
	}, {
		name: {
			'zh-tw': "特製拐杖"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上附有「寶可夢道具」，則增加90點傷害。"
		},

		damage: "90+",
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card