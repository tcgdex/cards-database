import { Card } from "../../../interfaces"
import Set from "../SVLN"

const card: Card = {
	set: Set,

	name: {
		ja: "イーブイ"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	dexId: [133],
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "不規則な 遺伝子を 持つ。 石から出る 放射線によって 体が 突然変異を 起こす。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ブーストしんか"
		},

		effect: {
			ja: "このポケモンは、バトル場にいるかぎり、最初の自分の番や、出したばかりの番でも進化できる。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "とつげき"
		},

		damage: 30,

		effect: {
			ja: "このポケモンにも10ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	rarity: "None"
}

export default card