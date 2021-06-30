import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Dawn Wings Necrozma",
		fr: "Necrozma Ailes de l’Aurore",
		es: "Necrozma Alas del Alba",
		it: "Necrozma Ali dell’Aurora",
		pt: "Necrozma Asas Alvorada",
		de: "Morgenschwingen-Necrozma"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
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
				en: "Gulf Stream",
				fr: "Courant du Golfe",
				es: "Corriente del Golfo",
				it: "Corrente del Golfo",
				pt: "Fluxo dos Ventos",
				de: "Golfstrom"
			},
			effect: {
				en: "If you have exactly 6 Prize cards remaining, this attack does 20 more damage for each damage counter on this Pokémon.",
				fr: "S’il vous reste exactement 6 cartes Récompense, cette attaque inflige 20 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
				es: "Si te quedan exactamente 6 cartas de Premio, este ataque hace 20 puntos de daño más por cada contador de daño en este Pokémon.",
				it: "Se ti sono rimaste esattamente sei carte Premio, questo attacco infligge 20 danni in più per ogni segnalino danno presente su questo Pokémon.",
				pt: "Se você tiver exatamente 6 cartas de Prêmio restantes, este ataque causará 20 pontos de dano a mais para cada contador de dano neste Pokémon.",
				de: "Wenn du genau 6 verbleibende Preiskarten hast, fügt diese Attacke 20 Schadenspunkte mehr mal der Anzahl der Schadensmarken auf diesem Pokémon zu."
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
				en: "Sword of Dawn",
				fr: "Épée de l’Aurore",
				es: "Espada del Alba",
				it: "Spada dell’Aurora",
				pt: "Espada da Alvorada",
				de: "Klinge des Morgens"
			},
			effect: {
				en: "Discard 2 Energy from this Pokémon.",
				fr: "Défaussez 2 Énergies de ce Pokémon.",
				es: "Descarta 2 Energías de este Pokémon.",
				it: "Scarta due Energie assegnate a questo Pokémon.",
				pt: "Descarte 2 Energias deste Pokémon.",
				de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
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



}

export default card
