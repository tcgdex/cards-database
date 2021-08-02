import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Stufful",
		fr: "Nounourson",
		es: "Stufful",
		it: "Stufful",
		pt: "Stufful",
		de: "Velursi"
	},

	illustrator: "so-taro",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
				es: "Placaje",
				it: "Azione",
				pt: "Investida",
				de: "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Jump On",
				fr: "Saut",
				es: "Asaltar",
				it: "Salta Su",
				pt: "Pular em Cima",
				de: "Draufspringen"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 40 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più.",
				pt: "Jogue 1 moeda. Se sair cara, este ataque causará 40 pontos de dano a mais.",
				de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 40 Schadenspunkte mehr zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 80,
	types: ["Colorless"],
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
