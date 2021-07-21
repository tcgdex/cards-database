import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Prinplup",
		fr: "Prinplouf",
		es: "Prinplup",
		it: "Prinplup",
		pt: "Prinplup",
		de: "Pliprin"
	},
	illustrator: "Hasuno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		394,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Piplup",
		fr: "Tiplouf",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Drip",
				fr: "Goutte à Goutte",
				es: "Goteo de Agua",
				it: "Gocciolacqua",
				pt: "Gotejo",
				de: "Spritzwasser"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Direct Dive",
				fr: "Plongeon Direct",
				es: "Zambullida Directa",
				it: "Tuffodiretto",
				pt: "Mergulho Certeiro",
				de: "Hechtsprung"
			},
			effect: {
				en: "Discard all Energy from this Pokémon. This attack does 100 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez toute l’Énergie de ce Pokémon. Cette attaque inflige 100 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Descarta todas las Energías de este Pokémon. Este ataque hace 100 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Scarta tutte le Energie assegnate a questo Pokémon. Questo attacco infligge 100 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Descarte todas as Energias deste Pokémon. Este ataque causa 100 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 100 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
