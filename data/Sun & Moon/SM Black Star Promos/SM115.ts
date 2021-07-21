import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Pheromosa",
		fr: "Cancrelove",
		es: "Pheromosa",
		it: "Pheromosa",
		pt: "Pheromosa",
		de: "Schabelle"
	},

	illustrator: "You Iribi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		795,
	],

	hp: 110,

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
				en: "High Jump Kick",
				fr: "Pied Voltige",
				es: "Patada Salto Alta",
				it: "Calcinvolo",
				pt: "Chute de Pulo Alto",
				de: "Turmkick"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "White Ray",
				fr: "Rayon Blanc",
				es: "Rayo Blanco",
				it: "Raggiobianco",
				pt: "Raio Branco",
				de: "Weißer Strahl"
			},
			effect: {
				en: "If you have only 1 Prize card remaining, this attack does 90 more damage.",
				fr: "S’il vous reste exactement 1 carte Récompense, cette attaque inflige 90 dégâts supplémentaires.",
				es: "Si te queda exactamente 1 carta de Premio, este ataque hace 90 puntos de daño más.",
				it: "Se hai esattamente una carta Premio rimanente, questo attacco infligge 90 danni in più.",
				pt: "Se você tiver apenas 1 carta de Prêmio restante, este ataque causará 90 pontos de dano a mais.",
				de: "Wenn du genau 1 verbleibende Preiskarte hast, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: "90+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 0
}

export default card
