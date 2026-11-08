import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Reuniclus",
		'fr-fr': "Symbios",
		'es-es': "Reuniclus",
		'it-it': "Reuniclus",
		'pt-br': "Reuniclus",
		'de-de': "Zytomega"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		579,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Duosion",
		'fr-fr': "Méios",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Dizzy Punch",
				'fr-fr': "Uppercut",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mind Bend",
				'fr-fr': "Contrôleur d'Esprit",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Confus.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "These remarkably intelligent Pokémon fight by controlling arms that can grip with rock-crushing power.",
	},

	thirdParty: {
		cardmarket: 280175,
		tcgplayer: 88721
	}
}

export default card
