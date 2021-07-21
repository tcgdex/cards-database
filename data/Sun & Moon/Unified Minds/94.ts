import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Doublade",
		fr: "Dimoclès",
		es: "Doublade",
		it: "Doublade",
		pt: "Doublade",
		de: "Duokles"
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
		en: "Honedge",
		fr: "Monorpale",
	},
	stage: "Stage1",


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



}

export default card
