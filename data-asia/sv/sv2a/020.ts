import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ラッタ",
		'zh-tw': "拉達"
	},

	illustrator: "sowsow",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [20],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "ヒゲは バランスを とる 大切な 器官。 どんなに 仲良くなっても 触られると 怒って 噛みつく。",
		'zh-tw': "鬍鬚是用來保持平衡的重要器官。 就算感情再好，如果摸了牠的鬍鬚， 牠都會生氣地咬過來。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "きずにかみつく",
			'zh-tw': "咬住傷口"
		},

		damage: "30+",

		effect: {
			ja: "相手のバトルポケモンにのっているダメカンの数×30ダメージ追加。",
			'zh-tw': "增加對手的戰鬥寶可夢身上放置的傷害指示物的數量×30點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card