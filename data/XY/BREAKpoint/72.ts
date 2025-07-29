import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Nuzleaf",
		fr: "Pifeuil",
		es: "Nuzleaf",
		it: "Nuzleaf",
		pt: "Nuzleaf",
		de: "Blanas"
	},

	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		274,
	],

	hp: 80,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Seedot",
		fr: "Grainipiot",
		es: "Seedot",
		it: "Seedot",
		pt: "Seedot",
		de: "Samurzel"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Corkscrew Punch",
				fr: "Poing Tire-Bouchon",
				es: "Puño Tirabuzón",
				it: "Pugno Rotante",
				pt: "Soco Saca-rolha",
				de: "Korkenzieherhieb"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Razor Wind",
				fr: "Coupe-Vent",
				es: "Viento Cortante",
				it: "Ventagliente",
				pt: "Vento Cortante",
				de: "Klingensturm"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				pt: "Jogue uma moeda. Se sair coroa, este ataque não fará nada.",
				de: "Wirf 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 40,

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

	retreat: 1,

	thirdParty: {
		cardmarket: 288247
	}
}

export default card
