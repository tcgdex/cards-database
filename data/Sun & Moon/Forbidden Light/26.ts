import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Clawitzer",
		fr: "Gamblast",
		es: "Clawitzer",
		it: "Clawitzer",
		pt: "Clawitzer",
		de: "Wummer"
	},

	illustrator: "otumami",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		693,
	],

	hp: 100,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Clauncher",
		fr: "Flingouste",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Standing By",
				fr: "État d’Alerte",
				es: "En Espera",
				it: "Attesa",
				pt: "Preparação",
				de: "Abwarten"
			},
			effect: {
				en: "During your next turn, this Pokémon’s Sharpshooting attack does 120 damage instead of 40.",
				fr: "Pendant votre prochain tour, l’attaque Tir de Précision de ce Pokémon inflige 120 dégâts au lieu de 40.",
				es: "Durante tu próximo turno, el ataque Tirador Certero de este Pokémon hace 120 puntos de daño en vez de 40.",
				it: "Durante il tuo prossimo turno, i danni dell’attacco Tiratore Scelto di questo Pokémon sono 120 invece di 40.",
				pt: "Durante a sua próxima vez de jogar, o ataque Tiro Preciso deste Pokémon causará 120 pontos de dano ao invés de 40.",
				de: "Während deines nächsten Zuges fügt die Attacke Scharfschuss dieses Pokémon 120 Schadenspunkte anstelle von 40 zu."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Sharpshooting",
				fr: "Tir de Précision",
				es: "Tirador Certero",
				it: "Tiratore Scelto",
				pt: "Tiro Preciso",
				de: "Scharfschuss"
			},
			effect: {
				en: "This attack does 40 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 40 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 40 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 40 danni a uno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 40 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt 1 Pokémon deines Gegners 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 355545
	}
}

export default card
