import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "マンキー"
	},

	illustrator: "Apios",
	rarity: "Common",
	category: "Pokemon",
	dexId: [56],
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "普段は 機嫌が 良くても ちょっとしたことで いきなり 暴れだすから 怖いのだ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ダブルチョップ"
		},

		damage: "10×",

		effect: {
			ja: "コインを2回投げ、オモテの数×10ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1
}

export default card