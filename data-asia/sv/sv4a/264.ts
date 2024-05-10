import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "クレッフィ",
		'zh-tw': "鑰圈兒"
	},

	illustrator: "yuu",
	category: "Pokemon",
	dexId: [707],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "昔の 貴族は 金庫の カギを 管理させる クレッフィを 代々 引き継ぎ 大切に 扱った。",
		'zh-tw': "過去的貴族會將掌管金庫鑰匙的鑰圈兒一代代地 傳承下去，並對其呵護備至。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "いたずらロック",
			'zh-tw': "惡作劇之鎖"
		},

		effect: {
			ja: "このポケモンがバトル場にいるかぎり、おたがいの場のたねポケモンの特性（「いたずらロック」をのぞく）は、すべてなくなる。",
			'zh-tw': "只要這隻寶可夢在戰鬥場上，雙方場上的【基礎】寶可夢的特性（「惡作劇之鎖」除外）全部消除。"
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ねらいおとす",
			'zh-tw': "狙落"
		},

		damage: 10,

		effect: {
			ja: "ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。",
			'zh-tw': "在造成傷害前，將對手的戰鬥寶可夢身上附加的「寶可夢道具」卡丟棄。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card