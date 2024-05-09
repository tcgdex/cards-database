import Set from "."
import { Card } from "../../../interfaces"

const card: Card = {
	set: Set,

	name: {

		ja: "オーガポン いしずえのめんex"
	},

	category: "Pokemon",
	rarity: "Double rare",
	illustrator: "5ban Graphics",
	hp: 210,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "いしずえのかまえ"
		},

		effect: {
			ja: "このポケモンは、相手の特性を持つポケモンからワザのダメージを受けない。"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "ぶちやぶる"
		},

		damage: 140,

		effect: {
			ja: "このワザのダメージは、弱点・抵抗力と、相手のバトルポケモンにかかっている効果を計算しない。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1
}

export default card
