import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Lilligant",
		fr: "Fragilady",
		es: "Lilligant",
		it: "Lilligant",
		pt: "Lilligant",
		de: "Dressella"
	},
	illustrator: "You Iribi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		549,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Petilil",
		fr: "Chlorobule",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Petal Blizzard",
				fr: "Tempête Florale",
				es: "Tormenta Floral",
				it: "Fiortempesta",
				pt: "Nevasca de Pétalas",
				de: "Blütenwirbel"
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 10 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 10 danni a ciascuno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 10 pontos de dano a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt jedem Pokémon deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Petal Dance",
				fr: "Danse-Fleur",
				es: "Danza Pétalo",
				it: "Petalodanza",
				pt: "Dança das Pétalas",
				de: "Blättertanz"
			},
			effect: {
				en: "Flip 3 coins. This attack does 40 damage for each heads. This Pokémon is now Confused.",
				fr: "Lancez 3 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face. Ce Pokémon est maintenant Confus.",
				es: "Lanza 3 monedas. Este ataque hace 40 puntos de daño por cada cara. Este Pokémon pasa a estar Confundido.",
				it: "Lancia tre volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa. Questo Pokémon viene confuso.",
				pt: "Jogue 3 moedas. Este ataque causa 40 pontos de dano para cada cara. Este Pokémon agora está Confuso.",
				de: "Wirf 3 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu. Dieses Pokémon ist jetzt verwirrt."
			},
			damage: "40×",

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
