import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pinsir",
		'fr-fr': "Scarabrute"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [127],
	hp: 90,
	types: ["Grass"],

	description: {
		'en-us': "These Pokémon judge one another based on\npincers. Thicker, more impressive pincers make\nfor more popularity with the opposite gender.",
		'fr-fr': "Ses cornes déterminent son rang au sein du groupe. Plus elles sont imposantes, plus les membres du sexe opposé l'apprécient."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Guillotine Rush",
			'fr-fr': "Charge Guillotine"
		},

		damage: 50,
		cost: ["Grass", "Colorless", "Colorless"],

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 40 more damage for each heads.",
			'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 40 dégâts supplémentaires pour chaque côté face."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card