import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Decidueye",
		fr: "Archéduc",
		es: "Decidueye",
		it: "Decidueye",
		pt: "Decidueye",
		de: "Silvarro"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		724,
	],

	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Dartrix",
		fr: "Efflèche",
	},

	stage: "Stage2",

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
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				pt: "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
				de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "30+",

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Brave Bird",
				fr: "Rapace",
				es: "Pájaro Osado",
				it: "Baldeali",
				pt: "Pássaro Bravo",
				de: "Sturzflug"
			},
			effect: {
				en: "This Pokémon does 20 damage to itself.",
				fr: "Ce Pokémon s’inflige 20 dégâts.",
				es: "Este Pokémon se hace 20 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 20 danni a se stesso.",
				pt: "Este Pokémon causa 20 pontos de dano a si mesmo.",
				de: "Dieses Pokémon fügt sich selbst 20 Schadenspunkte zu."
			},
			damage: 120,

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
		cardmarket: 295317
	}
}

export default card
