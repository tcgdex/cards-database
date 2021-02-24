import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Delibird",
		fr: "Cadoizo",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		225,
	],
	hp: 90,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Happy Delivery",
				fr: "Livraison en Fanfare",
			},
			effect: {
				en: "Choose any number of your Benched Pokémon that don't already have a Pokémon Tool attached to them. For each of those Pokémon, search your deck for a Pokémon Tool card and attach it to that Pokémon. Then, shuffle your deck.",
				fr: "Choisissez autant de vos Pokémon de Banc auxquels aucun Outil Pokémon n’est attaché que vous voulez. Pour chacun de ces Pokémon, cherchez une carte Outil Pokémon dans votre deck et attachez-la à ce Pokémon-là. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Flap",
				fr: "Battement",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
