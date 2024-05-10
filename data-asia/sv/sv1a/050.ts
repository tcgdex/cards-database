import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ルガルガンex",
		'zh-tw': "鬃岩狼人ex"
	},

	illustrator: "kawayoo",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Fighting"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "いわおとし",
			'zh-tw': "落石"
		},

		damage: 40
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "スケアリーファング",
			'zh-tw': "駭人獠牙"
		},

		damage: 140,

		effect: {
			ja: "次の相手の番、このポケモンがワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを10個のせる。",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害時，在使用招式的寶可夢身上放置10個傷害指示物。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card