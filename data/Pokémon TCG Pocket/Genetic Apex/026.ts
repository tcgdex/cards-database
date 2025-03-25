import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Pinsir",
		fr: "Scarabrute"
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			en: "Double Horn",
			fr: "Double Corne"
		},

		effect: {
			en: "Flip 2 coins. This attack does 50 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts pour chaque côté face."
		},

		damage: "50×"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond",

	description: {
		en: "These Pokémon judge one another based on pincers. Thicker, more impressive pincers make for more popularity with the opposite gender.",
		fr: "Ses cornes déterminent son rang au sein du groupe. Plus elles sont imposantes, plus les membres du sexe opposé l'apprécient."
	}
}

export default card
