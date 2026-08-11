import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Vanillish",
		'fr-fr': "Sorboul"
	},

	illustrator: "Shin Nagasawa",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [583],
	hp: 80,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Vanillite"
	},

	description: {
		'en-us': "By drinking pure water, it grows its icy body.\nThis Pokémon can be hard to find on days with\nwarm, sunny weather.",
		'fr-fr': "Il boit de l'eau pure pour gonfler son corps de glace. On le voit rarement les jours ensoleillés."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Sweets Relay",
			'fr-fr': "Saupoudrage Sucré"
		},

		damage: 30,
		cost: ["Water"],

		effect: {
			'en-us': "If 1 of your Pokémon used Sweets Relay during your last turn, this attack does 20 more damage.",
			'fr-fr': "Si un de vos Pokémon a utilisé  lors de votre dernier tour, cette attaque inflige 20 dégâts supplémentaires."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2
}

export default card