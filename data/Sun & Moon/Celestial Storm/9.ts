import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Grovyle",
		fr: "Massko",
		es: "Grovyle",
		it: "Grovyle",
		pt: "Grovyle",
		de: "Reptain"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		253,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Treecko",
		fr: "Arcko",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Leaf Blade",
				fr: "Lame-Feuille",
				es: "Hoja Aguda",
				it: "Fendifoglia",
				pt: "Lâmina de Folha",
				de: "Laubklinge"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 40 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più.",
				pt: "Jogue 1 moeda. Se sair cara, este ataque causará 40 pontos de dano a mais.",
				de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 40 Schadenspunkte mehr zu."
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

	retreat: 1,

	thirdParty: {
		cardmarket: 361256
	}
}

export default card
