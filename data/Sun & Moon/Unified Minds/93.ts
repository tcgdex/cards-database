import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Honedge",
		fr: "Monorpale",
		es: "Honedge",
		it: "Honedge",
		pt: "Honedge",
		de: "Gramokles"
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
				en: "Slashing Cutter",
				fr: "Lame Lacérante",
				es: "Cuchillada Afilada",
				it: "Fil di Lama",
				pt: "Cortador Dilacerante",
				de: "Schlitzender Schnitt"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Weakness or Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				es: "El daño de este ataque no se ve afectado por Debilidad o Resistencia.",
				it: "I danni di questo attacco non sono influenzati dalla debolezza o dalla resistenza.",
				pt: "O dano deste ataque não é afetado por Fraqueza ou Resistência.",
				de: "Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert."
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

	thirdParty: {
		cardmarket: 388262,
		tcgplayer: 195025
	}
}

export default card
