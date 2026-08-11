import { Card } from 'models/database/card'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		'en-us': "Pheromosa",
		'fr-fr': "Cancrelove",
		'es-es': "Pheromosa",
		'it-it': "Pheromosa",
		'pt-br': "Pheromosa",
		'de-de': "Schabelle"
	},

	illustrator: "Hitoshi Ariga",
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
				'en-us': "High Jump Kick",
				'fr-fr': "Pied Voltige",
				'es-es': "Patada Salto Alta",
				'it-it': "Calcinvolo",
				'pt-br': "Chute de Pulo Alto",
				'de-de': "Turmkick"
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
				'en-us': "White Ray",
				'fr-fr': "Rayon Blanc",
				'es-es': "Rayo Blanco",
				'it-it': "Raggiobianco",
				'pt-br': "Raio Branco",
				'de-de': "Weißer Strahl"
			},
			effect: {
				'en-us': "If you have only 1 Prize card remaining, this attack does 90 more damage.",
				'fr-fr': "S’il vous reste exactement 1 carte Récompense, cette attaque inflige 90 dégâts supplémentaires.",
				'es-es': "Si te queda exactamente 1 carta de Premio, este ataque hace 90 puntos de daño más.",
				'it-it': "Se hai esattamente una carta Premio rimanente, questo attacco infligge 90 danni in più.",
				'pt-br': "Se você tiver apenas 1 carta de Prêmio restante, este ataque causará 90 pontos de dano a mais.",
				'de-de': "Wenn du genau 1 verbleibende Preiskarte hast, fügt diese Attacke 90 Schadenspunkte mehr zu."
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

	retreat: 0,

	description: {
		'en-us': "One of the Ultra Beasts. It refuses to touch anything, perhaps because it senses some uncleanness in this world.",
	},

	thirdParty: {
		cardmarket: 320583,
		tcgplayer: 165658
	}
}

export default card
