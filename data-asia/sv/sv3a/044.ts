import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ナットレイ"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [598],
	hp: 140,
	types: ["Metal"],

	description: {
		ja: "鋼より 硬い 棘を もつ。 触手の 棘を 突き刺し 岩壁を 這って 移動する。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "かたいからだ"
		},

		effect: {
			ja: "このポケモンが受けるワザのダメージは「-30」される。"
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			ja: "スピニングニードル"
		},

		damage: 50,

		effect: {
			ja: "次の自分の番、このポケモンの「スピニングニードル」のダメージは「+100」される。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 3
}

export default card