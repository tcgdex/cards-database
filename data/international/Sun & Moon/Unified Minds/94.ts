import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Doublade",
		'fr-fr': "Dimoclès",
		'es-es': "Doublade",
		'it-it': "Doublade",
		'pt-br': "Doublade",
		'de-de': "Duokles"
	},

	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		680,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Honedge",
		'fr-fr': "Monorpale",
	},

	stage: "Stage1",

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
			damage: 30,

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
		'en-us': "When Honedge evolves, it divides into two swords, which cooperate via telepathy to coordinate attacks and slash their enemies to ribbons.",
	},

	thirdParty: {
		cardmarket: 388277,
		tcgplayer: 195026
	}
}

export default card
