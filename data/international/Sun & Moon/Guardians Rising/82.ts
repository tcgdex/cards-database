import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Pangoro",
		'fr-fr': "Pandarbare",
		'es-es': "Pangoro",
		'it-it': "Pangoro",
		'pt-br': "Pangoro",
		'de-de': "Pandagro"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		675,
	],

	hp: 130,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Pancham",
		'fr-fr': "Pandespiègle",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sky Uppercut",
				'fr-fr': "Stratopercut",
				'es-es': "Gancho Alto",
				'it-it': "Stramontante",
				'pt-br': "Direto Celeste",
				'de-de': "Himmelhieb"
			},
			effect: {
				'en-us': "This attack’s damage isn’t affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'es-es': "El daño de este ataque no se ve afectado por Resistencia.",
				'it-it': "I danni di questo attacco non sono influenzati dalla resistenza.",
				'pt-br': "O dano deste ataque não é afetado por Resistência.",
				'de-de': "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
			},
			damage: 70,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Magnum Punch",
				'fr-fr': "Poing magnum",
				'es-es': "Puño magnum",
				'it-it': "Superpugno",
				'pt-br': "Soco Magnum",
				'de-de': "Magnum-Schlag"
			},

			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It boasts superb physical strength. Those who wish to become Pangoro's Trainer have no choice but to converse with their fists.",
	},

	thirdParty: {
		cardmarket: 297539,
		tcgplayer: 130994
	}
}

export default card
