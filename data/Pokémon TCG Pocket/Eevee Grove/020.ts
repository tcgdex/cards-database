import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Vanilluxe",
		fr: "Sorbouboul"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		en: "Vanillish"
	},

	description: {
		en: "When its anger reaches a breaking point, this\nPokémon unleashes a fierce blizzard that freezes\nevery creature around it, be they friend or foe.",
		fr: "Lorsqu'il a les nerfs en boule, il provoque un blizzard qui gèle tout le monde, alliés comme adversaires."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Double Spin",
			fr: "Double Tour"
		},

		damage: 80,
		cost: ["Water", "Colorless"],

		effect: {
			en: "Flip 2 coins. This attack does 80 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 80 dégâts pour chaque côté face."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2
}

export default card