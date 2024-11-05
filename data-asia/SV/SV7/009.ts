import { Card } from "../../../interfaces"
import Set from "../SV7"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "白蓬蓬",
		'zh-cn': "白蓬蓬",
		ja: "ワタシラガ"
	},

	illustrator: "Yuka Tanaka",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "棉絮的種子營養豐富。 牠會藉由風散播種子， 讓草木和寶可夢變得活力十足。",
		'zh-cn': "棉絮的種子營養豐富。 牠會藉由風散播種子， 讓草木和寶可夢變得活力十足。",
		ja: "綿毛の 種は 栄養満点。 風に 乗せて 飛ばして 草木や ポケモンたちを 元気にさせる。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "微風之禮",
			'zh-cn': "微風之禮",
			ja: "そよかぜギフト"
		},

		effect: {
			'zh-tw': "將這隻寶可夢與附加的卡，全部放回自己的牌庫。然後，從牌庫任意選擇最多3張卡加入手牌。並且重洗牌庫。",
			'zh-cn': "將這隻寶可夢與附加的卡，全部放回自己的牌庫。然後，從牌庫任意選擇最多3張卡加入手牌。並且重洗牌庫。",
			ja: "このポケモンと、ついているすべてのカードを、自分の山札にもどす。その後、山札から好きなカードを3枚まで選び、手札に加える。そして山札を切る。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "樹葉",
			'zh-cn': "樹葉",
			ja: "このは"
		},

		damage: 50,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [830]
}

export default card