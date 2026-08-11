import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Kecleon",
		'fr-fr': "Kecleon",
		'es-es': "Kecleon",
		'it-it': "Kecleon",
		'pt-br': "Kecleon",
		'de-de': "Kecleon"
	},

	illustrator: "OOYAMA",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		352,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Unit Color 3",
				'fr-fr': "Couleur Unitaire 3",
				'es-es': "Color Unidad 3",
				'it-it': "Unione Colore 3",
				'pt-br': "Cor Unitária 3",
				'de-de': "Aggregat-Farbe 3"
			},
			effect: {
				'en-us': "As long as this Pokémon has Unit Energy FightingDarknessFairy attached to it, it is a Fighting, Darkness, and Fairy Pokémon.",
				'fr-fr': "Tant que de l’Énergie Unitaire FightingDarknessFairy est attachée à ce Pokémon, c’est un Pokémon Fighting, Darkness et Fairy.",
				'es-es': "Mientras este Pokémon tenga alguna carta de Energía Unidad FightingDarknessFairy unida a él, es un Pokémon Fighting, Darkness y Fairy.",
				'it-it': "Fintanto che ha delle carte Energia Unione FightingDarknessFairy assegnate, questo Pokémon è di tipo Fighting, Darkness e Fairy.",
				'pt-br': "Enquanto este Pokémon tiver Energia Unitária FightingDarknessFairy ligada a ele, será um Pokémon Fighting, Darkness e Fairy.",
				'de-de': "Solang an dieses Pokémon Aggregat-Energie FightingDarknessFairy angelegt ist, ist es ein Fighting-, Darkness- und Fairy-Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gentle Slap",
				'fr-fr': "Gifle Douce",
				'es-es': "Bofetada Gentil",
				'it-it': "Schiaffetto",
				'pt-br': "Tapinha",
				'de-de': "Sanfter Hieb"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It changes its shading to match its surroundings so it can sneak up on prey. Only its belly patterns stay fixed.",
	},

	thirdParty: {
		cardmarket: 365797,
		tcgplayer: 178985
	}
}

export default card
