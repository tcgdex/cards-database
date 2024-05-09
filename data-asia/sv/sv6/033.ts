import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ユキメノコ"
	},

	category: "Pokemon",
	rarity: "Rare",
	illustrator: "Makura Tami",
	dexId: [478],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "マイナス５０度の 息を 吹きかけ 凍らせた 獲物を 秘密の 場所に 飾っていると 言われる。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "いてつくとばり"
		},

		effect: {
			ja: "このポケモンがいるかぎり、ポケモンチェックのたび、おたがいの特性を持つポケモン（「ユキメノコ」をのぞく）全員に、それぞれダメカンを1個のせる。"
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "フロストスマッシュ"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1
}

export default card
