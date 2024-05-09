import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "モジャンボ"
	},

	illustrator: "LINNE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [465],
	hp: 150,
	types: ["Grass"],

	description: {
		ja: "自在に 伸びる ２本の 腕は じつは ツルが 束になったものと 最近の 研究で わかった。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "みつりんボディ"
		},

		effect: {
			ja: "このポケモンが受けるワザのダメージは「-30」される。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			ja: "おおいかぶさる"
		},

		damage: "150－",

		effect: {
			ja: "このポケモンにのっているダメカンの数×10ダメージぶん、このワザのダメージは小さくなる。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 4
}

export default card