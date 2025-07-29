import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Shining Volcanion",
		fr: "Volcanion Brillant",
		es: "Volcanion Luminoso",
		it: "Volcanion iridescente",
		pt: "Volcanion Luminescente",
		de: "Schimmerndes Volcanion"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		721,
	],

	hp: 130,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Dual Pump",
				fr: "Double Pompe",
				es: "Bombeo Dual",
				it: "Doppia Pompa",
				pt: "Bomba Dupla",
				de: "Doppelpumpe"
			},
			effect: {
				en: "This attack does 50 damage to 2 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 50 dégâts à 2 des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 50 puntos de daño a 2 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 50 danni a due dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 50 pontos de dano a 2 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt 2 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Quad Smash",
				fr: "Quadruple Destruction",
				es: "Golpe Cuádruple",
				it: "Colpo Quadruplo",
				pt: "Pancada Quádrupla",
				de: "Quartettstoß"
			},
			effect: {
				en: "Flip 4 coins. This attack does 50 damage for each heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
				es: "Lanza 4 monedas. Este ataque hace 50 puntos de daño por cada cara.",
				it: "Lancia quattro volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa.",
				pt: "Jogue 4 moedas. Este ataque causa 50 pontos de dano para cada cara.",
				de: "Wirf 4 Münzen. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu."
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 302165
	}
}

export default card
