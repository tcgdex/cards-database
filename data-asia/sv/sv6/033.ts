import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {
		ja: "ユキメノコ",
		'zh-tw': "雪妖女"
	},

	category: "Pokemon",
	rarity: "Rare",
	illustrator: "Makura Tami",
	dexId: [478],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "マイナス５０度の 息を 吹きかけ 凍らせた 獲物を 秘密の 場所に 飾っていると 言われる。",
		'zh-tw': "據說會吐出零下５０度的 氣息凍結獵物，然後帶到 秘密的地方裝飾起來。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "いてつくとばり",
			'zh-tw': "冰冷之帳"
		},

		effect: {
			ja: "このポケモンがいるかぎり、ポケモンチェックのたび、おたがいの特性を持つポケモン（「ユキメノコ」をのぞく）全員に、それぞれダメカンを1個のせる。",
			'zh-tw': "只要這隻寶可夢在場上，每次寶可夢檢查時，在雙方的擁有特性的所有寶可夢（「雪妖女」除外）身上各放置1個傷害指示物。"
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "フロストスマッシュ",
			'zh-tw': "冰霜粉碎"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card