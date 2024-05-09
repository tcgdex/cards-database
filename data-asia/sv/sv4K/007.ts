import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "アママイコ"
	},

	illustrator: "Kariya",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [762],
	hp: 90,
	types: ["Grass"],

	description: {
		ja: "元気な 気持ちになれる 甘い 香りを 振りまく。 制汗剤の フレーバーとして 人気が 高い。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "かいてんアタック"
		},

		damage: 30
	}, {
		cost: ["Grass", "Grass"],

		name: {
			ja: "ダブルスピン"
		},

		damage: "40×",

		effect: {
			ja: "コインを2回投げ、オモテの数×40ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card