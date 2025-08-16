import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Wishiwashi",
		fr: "Froussardine",
		es: "Wishiwashi",
		it: "Wishiwashi",
		pt: "Wishiwashi",
		de: "Lusardin"
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
				en: "Meet Up",
				fr: "Assemblée",
				es: "Agrupación",
				it: "Raduno",
				pt: "Reunião",
				de: "Zusammenkommen"
			},
			effect: {
				en: "Your Wishiwashi-GX in play get +20 HP, and their attacks do 20 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance).",
				fr: "Vos Froussardine-GX en jeu reçoivent +20 PV et leurs attaques infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				es: "Tus Wishiwashi-GX en juego obtienen 20 PS más, y sus ataques hacen 20 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
				it: "I tuoi Wishiwashi-GX in gioco hanno 20 PS in più e i loro attacchi infliggono 20 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
				pt: "Seus Wishiwashi-GX em jogo recebem 20 PS a mais e os ataques deles causam 20 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
				de: "Deine Lusardin-GX im Spiel erhalten 20 KP mehr und ihre Attacken fügen dem Aktiven Pokémon deines Gegners 20 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
				es: "Pistola Agua",
				it: "Pistolacqua",
				pt: "Revólver d’Água",
				de: "Aquaknarre"
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

	thirdParty: {
		cardmarket: 363503,
		tcgplayer: 175417
	}
}

export default card
