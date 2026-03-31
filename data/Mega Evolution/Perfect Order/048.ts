import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Gastly",
		fr: "Fantominus",
		es: "Gastly",
		de: "Nebulak",
		it: "Gastly",
		pt: "Gastly"
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	dexId: [
		92
	],
	hp: 70,
	types: [
		"Darkness"
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Darkness"
			],
			name: {
				en: "Surprise Attack",
				fr: "Attaque Surprise",
				es: "Ataque Sorpresa",
				de: "Überraschungsangriff",
				it: "Attacco a Sorpresa",
				pt: "Ataque Surpresa"
			},
			damage: "30",
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				es: "Lanza 1 moneda. Si sale cruz, este ataque no hace nada.",
				de: "Wirf 1 Münze. Bei Zahl hat diese Attacke keine Auswirkungen.",
				it: "Lancia una moneta. Se esce croce, questo attacco non ha effetto.",
				pt: "Jogue uma moeda. Se sair coroa, este ataque não fará nada."
			}
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "MARINA Chikazawa",
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],
	thirdParty: {
		tcgplayer: 684429,
		cardmarket: 877463
	}
}

export default card
