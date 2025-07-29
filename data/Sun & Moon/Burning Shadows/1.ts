import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Caterpie",
		fr: "Chenipan",
		es: "Caterpie",
		it: "Caterpie",
		pt: "Caterpie",
		de: "Raupy"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		10,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
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
				fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
				es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				pt: "Jogue 1 moeda. Se sair coroa, este ataque não fará nada.",
				de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 299408
	}
}

export default card
