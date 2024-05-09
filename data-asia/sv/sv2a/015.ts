import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "スピアー"
	},

	illustrator: "nisimono",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [15],
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "集団で 現れることもある。 猛スピードで 飛び回り お尻の 毒針で 刺しまくる。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ぎゃっきょうニードル"
		},

		damage: "30＋",

		effect: {
			ja: "自分の手札が1枚もないなら、120ダメージ追加し、相手のバトルポケモンをどくとマヒにする。"
		}
	}, {
		cost: ["Grass", "Grass"],

		name: {
			ja: "つきさす"
		},

		damage: 110
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card