import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Gardevoir",
		'fr-fr': "Gardevoir",
		'es-es': "Gardevoir",
		'it-it': "Gardevoir",
		'pt-br': "Gardevoir",
		'de-de': "Guardevoir"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		282,
	],

	hp: 110,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Psychic Mirage",
				'fr-fr': "Mirage Psychique",
				'es-es': "Espejismo Psíquico",
				'it-it': "Psicomiraggio",
				'pt-br': "Miragem Psíquica",
				'de-de': "Psycho-Trugbild"
			},
			effect: {
				'en-us': "Each basic Psychic Energy attached to your Psychic Pokémon provides PsychicPsychic Energy. You can't apply more than 1 Psychic Mirage Ability at a time.",
				'fr-fr': "",
				'es-es': "",
				'it-it': "",
				'pt-br': "",
				'de-de': ""
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mind Shock",
				'fr-fr': "Choc Cérébral"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Weakness or Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance."
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
		'en-us': "This extremely rare Pokémon is a different color than usual. It is very hard to find.",
	},

	thirdParty: {
		cardmarket: 280437,
		tcgplayer: 85638
	}
}

export default card
