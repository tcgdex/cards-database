import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Tynamo",
		fr: "Anchwatt",
		es: "Tynamo",
		it: "Tynamo",
		pt: "Tynamo",
		de: "Zapplardin"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		602,
	],

	hp: 40,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Water Splash",
				fr: "Éclaboussure",
				es: "Chapoteo Agua",
				it: "Acquasplash",
				pt: "Espirro d'Água",
				de: "Wasserplatscher"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 10 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 10 danni in più.",
				pt: "Jogue uma moeda. Se sair cara, este ataque causará 10 de danos adicionais.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 weitere Schadenspunkte zu."
			},
			damage: "10+",

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
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 273593
	}
}

export default card
