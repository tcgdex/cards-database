import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Carnivine",
		fr: "Vortente",
		es: "Carnivine",
		it: "Carnivine",
		pt: "Carnivine",
		de: "Venuflibis"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		455,
	],

	hp: 90,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Chomp Chomp",
				fr: "Mangeouille",
				es: "Ñam Ñam",
				it: "Mastica Bene",
				pt: "Nhoc Nhoc",
				de: "Mampfen"
			},
			effect: {
				en: "Heal 20 damage from this Pokémon.",
				fr: "Soignez 20 dégâts à ce Pokémon.",
				es: "Cura 20 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 20 danni.",
				pt: "Cure 20 pontos de dano deste Pokémon.",
				de: "Heile 20 Schadenspunkte bei diesem Pokémon."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Loom Over",
				fr: "Menacer",
				es: "Cernirse",
				it: "Presenza Minacciosa",
				pt: "Pairar Sobre",
				de: "Schattenseite"
			},
			effect: {
				en: "This attack does 10 less damage for each damage counter on this Pokémon.",
				fr: "Cette attaque inflige 10 dégâts de moins pour chaque marqueur de dégâts placé sur ce Pokémon.",
				es: "Este ataque hace 10 puntos de daño menos por cada contador de daño en este Pokémon.",
				it: "Questo attacco infligge 10 danni in meno per ogni segnalino danno presente su questo Pokémon.",
				pt: "Este ataque causa 10 pontos de dano a menos para cada contador de dano neste Pokémon.",
				de: "Diese Attacke fügt 10 Schadenspunkte weniger mal der Anzahl der Schadensmarken auf diesem Pokémon zu."
			},
			damage: "90-",

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
		cardmarket: 315944
	}
}

export default card
