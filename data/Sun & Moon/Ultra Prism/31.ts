import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Piplup",
		fr: "Tiplouf",
		es: "Piplup",
		it: "Piplup",
		pt: "Piplup",
		de: "Plinfa"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		393,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Splatter",
				fr: "Crépitement",
				es: "Esparcido",
				it: "Spruzzo",
				pt: "Respingo",
				de: "Verspritzer"
			},
			effect: {
				en: "This attack does 20 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 20 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 20 danni a uno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 20 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt 1 Pokémon deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

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
		cardmarket: 315962
	}
}

export default card
