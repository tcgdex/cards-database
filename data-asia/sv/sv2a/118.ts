import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "トサキント"
	},

	illustrator: "SIE NANAHARA",
	rarity: "Common",
	category: "Pokemon",
	dexId: [118],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "背びれ 胸びれが 筋肉のように 発達しており 水中を ５ノットの 速さで 泳ぐ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "さんれんづき"
		},

		damage: "10×",

		effect: {
			ja: "コインを3回投げ、オモテの数×10ダメージ。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "うちみず"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card