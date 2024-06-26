import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "穿著熊"
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		'zh-tw': "如果牠認定你是牠的夥伴， 便會試著擁抱你來表示喜愛。 但這會弄碎你的骨頭，非常危險。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "力量充能"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇1張基本能量卡，附於這隻寶可夢身上。並且重洗牌庫。"
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "頭突"
		},

		damage: 130,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card