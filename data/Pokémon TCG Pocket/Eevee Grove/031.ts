import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Swirlix",
		fr: "Sucroquin"
	},

	illustrator: "MAHOU",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		en: "It eats its own weight in sugar every day.\nIf it doesn't get enough sugar, it becomes\nincredibly grumpy.",
		fr: "Il mange son propre poids en sucre chaque jour. S'il n'a pas sa dose de sucreries, il devient horriblement grognon."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Sweets Relay",
			fr: "Saupoudrage Sucré"
		},

		damage: 10,
		cost: ["Colorless"],

		effect: {
			en: "If 1 of your Pokémon used Sweets Relay during your last turn, this attack does 20 more damage.",
			fr: "Si un de vos Pokémon a utilisé  lors de votre dernier tour, cette attaque inflige 20 dégâts supplémentaires."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card