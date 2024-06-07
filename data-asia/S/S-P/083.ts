import { Card } from "../../../interfaces"
import Set from "../S-P"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "皮卡丘&捷克羅姆GX"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 240,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "滿溢驅動"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出最多3張【雷】能量卡，附於自己的1隻寶可夢身上。並且重洗牌庫。"
		},

		damage: 150,
		cost: ["Lightning", "Lightning", "Lightning"]
	}, {
		name: {
			'zh-tw': "聯手伏特GX"
		},

		effect: {
			'zh-tw': "若額外附有3個【雷】能量，則對手的1隻備戰寶可夢也受到170點傷害。[在備戰區不計算弱點・抵抗力。][對戰中，己方只可使用1次GX招式。]"
		},

		damage: 200,
		cost: ["Lightning", "Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	resistances: [{
		type: "Metal",
		value: "-20"
	}],

	retreat: 3,
	regulationMark: "C"
}

export default card