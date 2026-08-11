import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Honedge",
		'fr-fr': "Monorpale",
		'es-es': "Honedge",
		'it-it': "Honedge",
		'pt-br': "Honedge",
		'de-de': "Gramokles"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		679,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Slashing Cutter",
				'fr-fr': "Lame Lacérante",
				'es-es': "Cuchillada Afilada",
				'it-it': "Fil di Lama",
				'pt-br': "Cortador Dilacerante",
				'de-de': "Schlitzender Schnitt"
			},
			effect: {
				'en-us': "This attack’s damage isn’t affected by Weakness or Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				'es-es': "El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
				'it-it': "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza.",
				'pt-br': "O dano deste ataque não é afetado por Fraqueza ou Resistência.",
				'de-de': "Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Apparently this Pokémon is born when a departed spirit inhabits a sword. It attaches itself to people and drinks their life force.",
	},

	thirdParty: {
		cardmarket: 388262,
		tcgplayer: 195025
	}
}

export default card
