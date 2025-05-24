import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "<火箭隊的>拉達",
		'zh-cn': "<火箭隊的>拉達",
		ja: "ロケット団のラッタ"
	},

	illustrator: "Uninori",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		'zh-tw': "鬍鬚是用來保持平衡的重要器官。 就算感情再好，如果摸了牠的鬍鬚， 牠都會生氣地咬過來。",
		'zh-cn': "鬍鬚是用來保持平衡的重要器官。 就算感情再好，如果摸了牠的鬍鬚， 牠都會生氣地咬過來。",
		ja: "ヒゲは バランスを とる 大切な 器官。 どんなに 仲良くなっても 触られると 怒って 噛みつく。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "顧前不顧後",
			'zh-cn': "顧前不顧後",
			ja: "むこうみず"
		},

		effect: {
			'zh-tw': "擲2次硬幣，若全部為反面，則這隻寶可夢也受到90點傷害。",
			'zh-cn': "擲2次硬幣，若全部為反面，則這隻寶可夢也受到90點傷害。",
			ja: "コインを2回投げ、すべてウラなら、このポケモンにも90ダメージ。"
		},

		damage: 90,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [20]
}

export default card