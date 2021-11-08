import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Machoke",
		fr: "Machopeur",
		es: "Machoke",
		it: "Machoke",
		pt: "Machoke",
		de: "Maschock"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Machop",
		fr: "Machoc"
	},

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Low Kick",
				fr: "Balayage",
				es: "Patada Baja",
				it: "Colpo Basso",
				pt: "Rasteira",
				de: "Fußkick"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Pummel",
				fr: "Martelage",
				es: "Aporrear",
				it: "Legnata",
				pt: "Esmurrar",
				de: "Trommler"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 70 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 70 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 70 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 70 danni in più.",
				pt: "Jogue 1 moeda. Se sair cara, este ataque causará 70 pontos de dano a mais.",
				de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 70 Schadenspunkte mehr zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "Its muscular body is so powerful, it must wear a power-save belt to be able to regulate its motions."
	}
}

export default card
