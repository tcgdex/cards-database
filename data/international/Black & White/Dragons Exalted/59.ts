import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Golurk",
		'fr-fr': "Golemastoc",
		'es-es': "Golurk",
		'it-it': "Golurk",
		'pt-br': "Golurk",
		'de-de': "Golgantes"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		623,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Golett",
		'fr-fr': "Gringolem",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Devolution Punch",
				'fr-fr': "Beigne Dés-évoluante",
			},
			effect: {
				'en-us': "Devolve the Defending Pokémon and put the highest Stage Evolution card on it into your opponent's hand.",
				'fr-fr': "Faites dés-évoluer le Pokémon Défenseur et mettez sa carte Évolution de plus haut Niveau dans la main de votre adversaire.",
			},
			damage: 60,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ghost Hammer",
				'fr-fr': "Spectro Maillet",
			},
			effect: {
				'en-us': "During your opponent's next turn, this Pokémon has no Weakness.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon n'a pas de Faiblesse.",
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It flies around the sky at Mach speeds. Removing the seal on its chest makes its internal energy go out of control.",
	},

	thirdParty: {
		cardmarket: 280498,
		tcgplayer: 85836
	}
}

export default card
