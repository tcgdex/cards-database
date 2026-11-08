import { Card } from 'models/database/card'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		'en-us': "Team Magma's Baltoy",
		'fr-fr': "Balbuto de la Team Magma",
		'pt-br': "Baltoy da Equipe Magma",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		343,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Telekinesis",
				'fr-fr': "Lévikinésie",
				'pt-br': "Telecinese",
			},
			effect: {
				'en-us': "This attack does 20 damage to 1 of your opponent's Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				'fr-fr': "Cette attaque inflige 20 dégâts à l'un des Pokémon de votre adversaire. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				'pt-br': "Este ataque causa 20 de danos a 1 dos Pokémon de seu oponente. Os danos desse ataque não são afetados por Fraqueza ou Resistência.",
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They all cry out at once to let us know when they spot an enemy. It really helps out!",
	},

	thirdParty: {
		cardmarket: 282521,
		tcgplayer: 97056
	}
}

export default card
