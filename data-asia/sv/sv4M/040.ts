import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "ストリンダーex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Fighting"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			ja: "ノックハンマー"
		},

		damage: 70,

		effect: {
			ja: "相手の山札を上から1枚トラッシュする。"
		}
	}, {
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			ja: "ガイアパンク"
		},

		damage: 270,

		effect: {
			ja: "自分の場のポケモンについているエネルギーを3個選び、トラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card