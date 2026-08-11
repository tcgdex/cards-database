import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Starmie",
		'fr-fr': "Staross",
		'es-es': "Starmie",
		'it-it': "Starmie",
		'pt-br': "Starmie",
		'de-de': "Starmie"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		121,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Staryu",
		'fr-fr': "Stari",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Confuse Ray",
				'fr-fr': "Onde Folie",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Confus.",
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Swift",
				'fr-fr': "Météores",
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Weakness, Resistance, or any other effects on the Defending Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance ou tout autre effet en action sur le Pokémon Défenseur.",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "At the center of its body is a red core, which sends mysterious radio signals into the night sky.",
	},

	thirdParty: {
		cardmarket: 280249,
		tcgplayer: 89538
	}
}

export default card
