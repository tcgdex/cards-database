import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Dewgong",
		fr: "Lamantine",
		es: "Dewgong",
		it: "Dewgong",
		pt: "Dewgong",
		de: "Jugong"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		87,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Seel",
		fr: "Otaria",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Whap",
				fr: "Queue Battoir",
				es: "Coletón",
				it: "Codabotta",
				pt: "Surra de Cauda",
				de: "Schweifvertrimmer"
			},

			damage: 60,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dual Blizzard",
				fr: "Double Blizzard",
				es: "Ventisca Doble",
				it: "Doppia Bora",
				pt: "Nevasca Dupla",
				de: "Doppelsturm"
			},
			effect: {
				en: "Discard 2 Energy from this Pokémon. This attack does 60 damage to 2 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez 2 Énergies de ce Pokémon. Cette attaque inflige 60 dégâts à 2 des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Descarta 2 Energías de este Pokémon. Este ataque hace 60 puntos de daño a 2 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Scarta due Energie assegnate a questo Pokémon. Questo attacco infligge 60 danni a due dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Descarte 2 Energias deste Pokémon. Este ataque causa 60 pontos de dano a 2 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel. Diese Attacke fügt 2 Pokémon deines Gegners 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
