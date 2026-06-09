import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "結草貴婦",
		ja: "ミノマダム"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		'zh-tw': "從結草兒進化過來時，蓑衣成了身體的一部分。 一輩子都不會脫下蓑衣。",
		ja: "ミノムッチから 進化したとき ミノが 体の 一部に なった。 一生 ミノを 脱ぐことはない。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "貴婦之怒",
			ja: "マダムのいかり"
		},

		effect: {
			'zh-tw': "增加自己的棄牌區的寶可夢卡的張數×10點傷害。",
			ja: "自分のトラッシュにあるポケモンの枚数×10ダメージ追加。"
		},

		damage: "30＋",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "綠葉吸取",
			ja: "リーフドレイン"
		},

		effect: {
			'zh-tw': "將這隻寶可夢恢復「30」HP。",
			ja: "このポケモンのHPを「30」回復する。"
		},

		damage: 80,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [413],

	thirdParty: {
		cardmarket: 605861
	}
}

export default card