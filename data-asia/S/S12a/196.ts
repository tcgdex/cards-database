import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 黏美龍",
		ja: "ヒスイ ヌメルゴン"
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],

	description: {
		'zh-tw': "能自在操縱可剛可柔的金屬外殼。 性情執著且厭惡孤獨，一旦喜愛的 對象離開自己便會怒不可遏。",
		ja: "金属の殻の 剛柔を 自在に 操る。 孤独を 厭い 執念深く 好いた者が 己から 離れると 怒り 荒ぶる。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "鋼之歸宿",
			ja: "はがねのおやど"
		},

		effect: {
			'zh-tw': "只要這隻寶可夢在場上，自己的所有身上附有【鋼】能量的【基礎】寶可夢，不會受到對手的「寶可夢【V】」招式的傷害。",
			ja: "このポケモンがいるかぎり、エネルギーがついている自分のたねポケモン全員は、相手の「ポケモンV」からワザのダメージを受けない。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "重磅衝擊",
			ja: "ヘビーインパクト"
		},

		damage: 140,
		cost: ["Water", "Metal", "Colorless"]
	}],

	retreat: 3,
	regulationMark: "F",
	dexId: [706]
}

export default card