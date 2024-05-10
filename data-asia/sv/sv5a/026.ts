import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "ウネルミナモ",
		'zh-tw': "波盪水"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [1009],
	hp: 130,
	types: ["Water"],

	description: {
		ja: "謎多き 凶暴な 生物。 古い 探検記に 記された 水の 怪物から 名付けられた。",
		'zh-tw': "充滿謎團的凶暴生物。名字來自古老的探險記裡 記載的水之怪物。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "オーロラゲイン",
			'zh-tw': "極光增輝"
		},

		damage: 20,

		effect: {
			ja: "このポケモンのHPを「20」回復する。",
			'zh-tw': "將這隻寶可夢恢復「20」HP。"
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "うねりさく",
			'zh-tw': "蜿蜒割裂"
		},

		damage: "20×",

		effect: {
			ja: "このポケモンにダメカンを9個までのせ、のせた数×20ダメージ。",
			'zh-tw': "在這隻寶可夢身上放置最多9個傷害指示物，造成放置的數量×20點傷害。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card