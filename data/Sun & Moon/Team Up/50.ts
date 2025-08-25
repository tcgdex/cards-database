import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Heliolisk",
		fr: "Iguolta",
		es: "Heliolisk",
		it: "Heliolisk",
		pt: "Heliolisk",
		de: "Elezard"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		695,
	],

	hp: 100,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Helioptile",
		fr: "Galvaran",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Random Spark",
				fr: "Étincelle Surprise",
				es: "Chispa al Azar",
				it: "Scintilla Casuale",
				pt: "Fagulha Aleatória",
				de: "Zufälliger Funke"
			},
			effect: {
				en: "This attack does 30 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt 1 Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Volt Switch",
				fr: "Change Éclair",
				es: "Voltiocambio",
				it: "Invertivolt",
				pt: "Troca Elétrica",
				de: "Voltwechsel"
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Lightning Pokémon.",
				fr: "Échangez ce Pokémon avec l’un de vos Pokémon Lightning de Banc.",
				es: "Cambia este Pokémon por 1 de tus Pokémon Lightning en Banca.",
				it: "Scambia questo Pokémon con un Pokémon Lightning della tua panchina.",
				pt: "Troque este Pokémon por 1 dos seus Pokémon Lightning no Banco.",
				de: "Tausche dieses Pokémon gegen 1 Lightning-Pokémon auf deiner Bank aus."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 368981,
		tcgplayer: 183825
	}
}

export default card
