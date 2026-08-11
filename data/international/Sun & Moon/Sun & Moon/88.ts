import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Skarmory",
		'fr-fr': "Airmure",
		'es-es': "Skarmory",
		'it-it': "Skarmory",
		'pt-br': "Skarmory",
		'de-de': "Panzaeron"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		227,
	],

	hp: 110,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Metallic Sound",
				'fr-fr': "Résonance Métallique",
				'es-es': "Sonido Metálico",
				'it-it': "Suono Metallico",
				'pt-br': "Som Metálico",
				'de-de': "Metallklang"
			},
			effect: {
				'en-us': "Discard all Special Energy from each Pokémon.",
				'fr-fr': "Défaussez toute l’Énergie spéciale de chaque Pokémon.",
				'es-es': "Descarta todas las Energías Especiales de cada Pokémon.",
				'it-it': "Scarta tutte le Energie speciali assegnate a ciascun Pokémon.",
				'pt-br': "Descarte todas as Energias Especiais de cada Pokémon.",
				'de-de': "Lege alle Spezial-Energien von jedem Pokémon auf den Ablagestapel."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aerial Ace",
				'fr-fr': "Aéropique",
				'es-es': "Golpe Aéreo",
				'it-it': "Aeroassalto",
				'pt-br': "Ás dos Ares",
				'de-de': "Aero-Ass"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				'pt-br': "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
				'de-de': "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its feathers, which fall off as it grows, are thin and sharp. In times long past, warriors used them as swords.",
	},

	thirdParty: {
		cardmarket: 295399,
		tcgplayer: 126960
	}
}

export default card
