import { Card } from 'models/database/card'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		'en-us': "Wishiwashi",
		'fr-fr': "Froussardine",
		'es-es': "Wishiwashi",
		'it-it': "Wishiwashi",
		'pt-br': "Wishiwashi",
		'de-de': "Lusardin"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		746,
	],

	hp: 30,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Meet Up",
				'fr-fr': "Assemblée",
				'es-es': "Agrupación",
				'it-it': "Raduno",
				'pt-br': "Reunião",
				'de-de': "Zusammenkommen"
			},
			effect: {
				'en-us': "Your Wishiwashi-GX in play get +20 HP, and their attacks do 20 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "Vos Froussardine-GX en jeu reçoivent +20 PV et leurs attaques infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Tus Wishiwashi-GX en juego obtienen 20 PS más, y sus ataques hacen 20 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
				'it-it': "I tuoi Wishiwashi-GX in gioco hanno 20 PS in più e i loro attacchi infliggono 20 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Seus Wishiwashi-GX em jogo recebem 20 PS a mais e os ataques deles causam 20 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
				'de-de': "Deine Lusardin-GX im Spiel erhalten 20 KP mehr und ihre Attacken fügen dem Aktiven Pokémon deines Gegners 20 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Water Gun",
				'fr-fr': "Pistolet à O",
				'es-es': "Pistola Agua",
				'it-it': "Pistolacqua",
				'pt-br': "Revólver d’Água",
				'de-de': "Aquaknarre"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It's awfully weak and notably tasty, so everyone is always out to get it. As it happens, anyone trying to bully it receives a painful lesson.",
	},

	thirdParty: {
		cardmarket: 363503,
		tcgplayer: 175417
	}
}

export default card
