import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "スコヴィランex",
		'zh-tw': "狠辣椒ex",
		'zh-cn': "狠辣椒ex"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Fire"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ダブルタイプ",
			'zh-tw': "雙重屬性",
			'zh-cn': "雙重屬性"
		},

		effect: {
			ja: "このポケモンは、場にいるかぎりとの2つのタイプになる。",
			'zh-tw': "只要這隻寶可夢在場上，改為【草】與【火】2種屬性。",
			'zh-cn': "只要這隻寶可夢在場上，改為【草】與【火】2種屬性。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire"],

		name: {
			ja: "スパイシーレイジ",
			'zh-tw': "香料激怒",
			'zh-cn': "香料激怒"
		},

		damage: "10+",

		effect: {
			ja: "このポケモンにのっているダメカンの数×70ダメージ追加。",
			'zh-tw': "增加這隻寶可夢身上放置的傷害指示物的數量×70點傷害。",
			'zh-cn': "增加這隻寶可夢身上放置的傷害指示物的數量×70點傷害。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card