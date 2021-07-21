import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Virizion",
		fr: "Viridium",
		es: "Virizion",
		it: "Virizion",
		pt: "Virizion",
		de: "Viridium"
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		640,
	],
	hp: 110,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Wrapped in Wind",
				fr: "Enveloppement Éolien",
				es: "Envuelto en Viento",
				it: "Ventavvolto",
				pt: "Embrulhado no Vento",
				de: "Windhülle"
			},
			effect: {
				en: "You may attach a basic Energy card from your hand to this Pokémon.",
				fr: "Vous pouvez attacher une carte Énergie de base de votre main à ce Pokémon.",
				es: "Puedes unir 1 carta de Energía Básica de tu mano a este Pokémon.",
				it: "Puoi assegnare una carta Energia base dalla tua mano a questo Pokémon.",
				pt: "Você pode ligar 1 carta de Energia básica da sua mão a este Pokémon.",
				de: "Du kannst 1 Basis-Energiekarte aus deiner Hand an dieses Pokémon anlegen."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Pike",
				fr: "Javelot",
				es: "Lanza",
				it: "Picca",
				pt: "Lança",
				de: "Langspieß"
			},
			effect: {
				en: "This attack does 30 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 30 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
