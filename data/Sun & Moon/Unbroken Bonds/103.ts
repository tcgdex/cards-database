import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Landorus",
		fr: "Démétéros",
		es: "Landorus",
		it: "Landorus",
		pt: "Landorus",
		de: "Demeteros"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		645,
	],

	hp: 120,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Linear Attack",
				fr: "Attaque Linéaire",
				es: "Ataque Lineal",
				it: "Attacco Lineare",
				pt: "Ataque Linear",
				de: "Linearer Angriff"
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
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Power Cyclone",
				fr: "Cyclone d’Énergie",
				es: "Ciclón Poderoso",
				it: "Ciclone Potente",
				pt: "Ciclone Poderoso",
				de: "Kraftwirbel"
			},
			effect: {
				en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
				fr: "Déplacez une Énergie de ce Pokémon vers l’un de vos Pokémon de Banc.",
				es: "Mueve 1 Energía de este Pokémon a 1 de tus Pokémon en Banca.",
				it: "Sposta un’Energia da questo Pokémon a uno di quelli nella tua panchina.",
				pt: "Mova 1 Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
				de: "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank."
			},
			damage: 60,

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
		cardmarket: 372394
	}
}

export default card
