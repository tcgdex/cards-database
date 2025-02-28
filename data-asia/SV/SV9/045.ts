import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "イノムー",
		'zh-tw': "長毛豬",
		'zh-cn': "長毛豬"
	},

	illustrator: "Aliya Chen",
	rarity: "Common",
	category: "Pokemon",
	dexId: [221],
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "長い 体毛に 覆われていて 寒さに 強く 氷の キバは 雪が降ると さらに 太くなる。",
		'zh-tw': "全身被長長的體毛覆蓋， 非常耐寒。冰的獠牙在 下雪時會變得更粗。",
		'zh-cn': "全身被長長的體毛覆蓋， 非常耐寒。冰的獠牙在 下雪時會變得更粗。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "かいりき",
			'zh-tw': "怪力",
			'zh-cn': "怪力"
		},

		damage: 20
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "キバでつく",
			'zh-tw': "牙撞",
			'zh-cn': "牙撞"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card