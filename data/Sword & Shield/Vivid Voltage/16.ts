import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Genesect",
		fr: "Genesect",
		es: "Genesect",
		it: "Genesect",
		pt: "Genesect",
		de: "Genesect"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Grass",
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
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
				en: "This attack does 50 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 50 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 50 danni a uno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 50 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt 1 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Techno Blast",
				fr: "Techno-Buster",
				es: "Tecno Shock",
				it: "Tecnobotto",
				pt: "Rajada Tecnológica",
				de: "Techblaster"
			},
			effect: {
				en: "During your next turn, this Pokémon can’t attack.",
				fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer.",
				es: "Durante tu próximo turno, este Pokémon no puede atacar.",
				it: "Durante il tuo prossimo turno, questo Pokémon non può attaccare.",
				pt: "Durante o seu próximo turno, este Pokémon não poderá atacar.",
				de: "Während deines nächsten Zuges kann dieses Pokémon nicht angreifen."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D"
}

export default card
