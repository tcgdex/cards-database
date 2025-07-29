import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Pangoro",
		fr: "Pandarbare",
		es: "Pangoro",
		it: "Pangoro",
		pt: "Pangoro",
		de: "Pandagro"
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
		en: "Pancham",
		fr: "Pandespiègle",
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
				en: "Sky Uppercut",
				fr: "Stratopercut",
				es: "Gancho Alto",
				it: "Stramontante",
				pt: "Direto Celeste",
				de: "Himmelhieb"
			},
			effect: {
				en: "This attack’s damage isn’t affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				es: "El daño de este ataque no se ve afectado por Resistencia.",
				it: "I danni di questo attacco non sono influenzati dalla resistenza.",
				pt: "O dano deste ataque não é afetado por Resistência.",
				de: "Der Schaden dieser Attacke wird durch Resistenz nicht verändert."
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
				en: "Magnum Punch",
				fr: "Poing magnum",
				es: "Puño magnum",
				it: "Superpugno",
				pt: "Soco Magnum",
				de: "Magnum-Schlag"
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

	thirdParty: {
		cardmarket: 297539
	}
}

export default card
