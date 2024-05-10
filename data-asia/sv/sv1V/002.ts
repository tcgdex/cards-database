import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ヘラクロス",
		'zh-tw': "赫拉克羅斯"
	},

	illustrator: "Taira Akitsu",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [214],
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "ものすごい 怪力の 持ち主。 自分の 体重の １００倍の 重さでも 楽に ぶん投げる。",
		'zh-tw': "擁有十分驚人的怪力。就連重量是自己體重１００倍的 物體也能輕鬆扔飛。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			ja: "かいりきなげ",
			'zh-tw': "怪力上投"
		},

		damage: "10+",

		effect: {
			ja: "相手のバトルポケモンのにげるためのエネルギーの数×30ダメージ追加。",
			'zh-tw': "增加對手的戰鬥寶可夢【撤退】所需的能量的數量×30點傷害。"
		}
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			ja: "つのでつく",
			'zh-tw': "角撞"
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card