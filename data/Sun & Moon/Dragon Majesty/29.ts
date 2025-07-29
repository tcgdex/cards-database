import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Milotic",
		fr: "Milobellus",
		es: "Milotic",
		it: "Milotic",
		pt: "Milotic",
		de: "Milotic"
	},

	illustrator: "hatachu",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		350,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Feebas",
		fr: "Barpau",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Aurora Wave",
				fr: "Vague Boréale",
				es: "Ola Aurora",
				it: "Ondaurora",
				pt: "Onda da Aurora",
				de: "Nordlichtschein"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Il Pokémon attivo del tuo avversario viene confuso.",
				pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Aqua Split",
				fr: "Scission Aqua",
				es: "Isoaqua",
				it: "Spartiacque",
				pt: "Divisão Aquática",
				de: "Wasserteiler"
			},
			effect: {
				en: "This attack does 40 damage to 2 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 40 dégâts à 2 des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 40 puntos de daño a 2 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 40 danni a due dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 40 pontos de dano a 2 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt 2 Pokémon auf der Bank deines Gegners 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 363501
	}
}

export default card
