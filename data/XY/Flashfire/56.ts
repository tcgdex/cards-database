import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Sandile",
		fr: "Mascaïman",
		es: "Sandile",
		it: "Sandile",
		pt: "Sandile",
		de: "Ganovil"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		551,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Surprise Attack",
				fr: "Attaque Surprise",
				es: "Ataque Sorpresa",
				it: "Attacco a Sorpresa",
				pt: "Ataque Surpresa",
				de: "Überraschungsangriff"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				pt: "Jogue uma moeda. Se sair coroa, esse ataque não fará nada.",
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

	retreat: 2,

	thirdParty: {
		cardmarket: 281539
	}
}

export default card
