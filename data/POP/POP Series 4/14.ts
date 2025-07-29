import { Card } from '../../../interfaces'
import Set from '../POP Series 4'

const card: Card = {
	name: {
		en: "Squirtle",
		fr: "Carapuce"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		7,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Shell Retreat",
				fr: "Rentrer dans sa coquille"
			},
			effect: {
				en: "As long as Squirtle has any Energy cards attached to it, damage done to Squirtle by an opponent’s attack is reduced by 10 (after applying Weakness and Resistance).",
				fr: "Tant que Carapuce possède des cartes Énergie, les dégâts qui lui sont infligés par une attaque de votre adversaire sont réduits de 10 (après application de la Faiblesse et de la Résistance)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning"
		},
	],

	retreat: 1,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 277479
	}
}

export default card
