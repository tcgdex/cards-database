import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Surskit",
		fr: "Arakdo",
		es: "Surskit",
		it: "Surskit",
		pt: "Surskit",
		de: "Gehweiher"
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		283,
	],
	hp: 50,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Quick Attack",
				fr: "Vive-Attaque",
				es: "Ataque Rápido",
				it: "Attacco Rapido",
				pt: "Ataque Rápido",
				de: "Ruckzuckhieb"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 10 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 10 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 10 danni in più.",
				pt: "Jogue 1 moeda. Se sair cara, este ataque causará 10 pontos de dano a mais.",
				de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 10 Schadenspunkte mehr zu."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
