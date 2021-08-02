import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Cufant",
		fr: "Charibari",
		es: "Cufant",
		it: "Cufant",
		pt: "Cufant",
		de: "Kupfanti"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 100,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
			],
			name: {
				en: "Stomp",
				fr: "Écrasement",
				es: "Pisotón",
				it: "Pestone",
				pt: "Pisotear",
				de: "Stampfer"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 20 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 20 danni in più.",
				pt: "Jogue 1 moeda. Se sair cara, este ataque causará 20 pontos de dano a mais.",
				de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
