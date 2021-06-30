import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Skarmory",
		fr: "Airmure",
		es: "Skarmory",
		it: "Skarmory",
		pt: "Skarmory",
		de: "Panzaeron"
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
				en: "Metallic Sound",
				fr: "Résonance Métallique",
				es: "Sonido Metálico",
				it: "Suono Metallico",
				pt: "Som Metálico",
				de: "Metallklang"
			},
			effect: {
				en: "Discard all Special Energy from each Pokémon.",
				fr: "Défaussez toute l’Énergie spéciale de chaque Pokémon.",
				es: "Descarta todas las Energías Especiales de cada Pokémon.",
				it: "Scarta tutte le Energie speciali assegnate a ciascun Pokémon.",
				pt: "Descarte todas as Energias Especiais de cada Pokémon.",
				de: "Lege alle Spezial-Energien von jedem Pokémon auf den Ablagestapel."
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aerial Ace",
				fr: "Aéropique",
				es: "Golpe Aéreo",
				it: "Aeroassalto",
				pt: "Ás dos Ares",
				de: "Aero-Ass"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				pt: "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
				de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
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



}

export default card
