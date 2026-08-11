import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Dawn Wings Necrozma",
		'fr-fr': "Necrozma Ailes de l’Aurore",
		'es-es': "Necrozma Alas del Alba",
		'it-it': "Necrozma Ali dell’Aurora",
		'pt-br': "Necrozma Asas Alvorada",
		'de-de': "Morgenschwingen-Necrozma"
	},
	illustrator: "nagimiso",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		800,
	],
	hp: 130,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Gulf Stream",
				'fr-fr': "Courant du Golfe",
				'es-es': "Corriente del Golfo",
				'it-it': "Corrente del Golfo",
				'pt-br': "Fluxo dos Ventos",
				'de-de': "Golfstrom"
			},
			effect: {
				'en-us': "If you have exactly 6 Prize cards remaining, this attack does 20 more damage for each damage counter on this Pokémon.",
				'fr-fr': "S’il vous reste exactement 6 cartes Récompense, cette attaque inflige 20 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
				'es-es': "Si te quedan exactamente 6 cartas de Premio, este ataque hace 20 puntos de daño más por cada contador de daño en este Pokémon.",
				'it-it': "Se ti sono rimaste esattamente sei carte Premio, questo attacco infligge 20 danni in più per ogni segnalino danno presente su questo Pokémon.",
				'pt-br': "Se você tiver exatamente 6 cartas de Prêmio restantes, este ataque causará 20 pontos de dano a mais para cada contador de dano neste Pokémon.",
				'de-de': "Wenn du genau 6 verbleibende Preiskarten hast, fügt diese Attacke 20 Schadenspunkte mehr mal der Anzahl der Schadensmarken auf diesem Pokémon zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Sword of Dawn",
				'fr-fr': "Épée de l’Aurore",
				'es-es': "Espada del Alba",
				'it-it': "Spada dell’Aurora",
				'pt-br': "Espada da Alvorada",
				'de-de': "Klinge des Morgens"
			},
			effect: {
				'en-us': "Discard 2 Energy from this Pokémon.",
				'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
				'es-es': "Descarta 2 Energías de este Pokémon.",
				'it-it': "Scarta due Energie assegnate a questo Pokémon.",
				'pt-br': "Descarte 2 Energias deste Pokémon.",
				'de-de': "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,




	description: {
		'en-us': "Lunala no longer has a will of its own. Now under the control of Necrozma, it continuously expels all of its energy.",
	},
}

export default card
