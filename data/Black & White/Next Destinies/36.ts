import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Cubchoo",
		fr: "Polarhume",
		es: "Cubchoo",
		it: "Cubchoo",
		pt: "Cubchoo",
		de: "Petznief"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		613,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Sniffle",
				fr: "Reniflement",
			},
			effect: {
				en: "During your next turn, this Pokémon's Belt attack's base damage is 40.",
				fr: "Pendant votre prochain tour, les dégâts de base de l'attaque Taloche de ce Pokémon sont de 40.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Belt",
				fr: "Taloche",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 280261
	}
}

export default card
