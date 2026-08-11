import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Claydol",
		'fr-fr': "Kaorine",
		'de-de': "Lepumentas"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [344],

	hp: 80,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Baltoy",
		'fr-fr': "Balbuto"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Primal Pull",
				'fr-fr': "Attraction primaire",
				'de-de': "Primal Pull"
			},
			effect: {
				'en-us': "As long as Claydol is your Active Pokémon, each player's Evolved Pokémon pays Colorless more Energy to use its attacks.",
				'fr-fr': "Tant que Kaorine est votre Pokémon Actif, le Pokémon Évolué de chaque joueur paye 1 Énergie  supplémentaire pour utiliser ses attaques.",
				'de-de': "As long as Claydol is your Active Pokémon, each player's Evolved Pokémon pays  more Energy to use its attacks."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Muddy Eye",
				'fr-fr': "Oeil boueux",
				'de-de': "Muddy Eye"
			},
			effect: {
				'en-us': "Does 10 damage times the number of basic Energy cards attached to Claydol and the Defending Pokémon.",
				'fr-fr': "Inflige 10 dégâts multipliés par le nombre de cartes Énergie de base attachées à Kaorine et au Pokémon Défenseur.",
				'de-de': "Does 10 damage times the number of basic Energy cards attached to Claydol and the Defending Pokémon."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84332,
				cardmarket: 276076
			}
		},
		{
			type: "reverse",
			foil: 'energy',
			thirdParty: {
				tcgplayer: 84332,
				cardmarket: 276076
			}
		},
	]
}

export default card
