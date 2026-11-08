import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Golurk",
		'fr-fr': "Golemastoc",
		'es-es': "Golurk",
		'it-it': "Golurk",
		'pt-br': "Golurk",
		'de-de': "Golgantes"
	},

	illustrator: "Akira Komayama",
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
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Iron Fist of Justice",
				'fr-fr': "Poing de Fer Juste",
			},
			effect: {
				'en-us': "If you have any Team Plasma Pokémon in play, this attack does nothing.",
				'fr-fr': "Si vous avez un Pokémon de la Team Plasma en jeu, cette attaque ne fait rien.",
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
				'en-us': "Shadow Punch",
				'fr-fr': "Poing Ombre",
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			},
			damage: 80,

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
		'en-us': "Golurk were created to protect people and Pokémon. They run on a mysterious energy.",
	},

	thirdParty: {
		cardmarket: 281067,
		tcgplayer: 85838
	}
}

export default card
