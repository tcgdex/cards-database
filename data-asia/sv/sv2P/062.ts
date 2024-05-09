import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ケッキング"
	},

	illustrator: "Yuya Oka",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [289],
	hp: 180,
	types: ["Colorless"],

	description: {
		ja: "世界一の ぐうたらだが 溜まった エネルギーを 一気に 出すことで 恐ろしい パワーを 発揮する。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "にどね"
		},

		effect: {
			ja: "ポケモンチェックのとき、このポケモンのねむりで投げるコインは2回になり、すべてオモテが出ないと回復しない。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ぐうたらヘッドバット"
		},

		damage: 240,

		effect: {
			ja: "このポケモンをねむりにする。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4
}

export default card