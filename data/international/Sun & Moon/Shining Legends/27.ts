import { Card } from 'models/database/card'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		'en-us': "Shining Volcanion",
		'fr-fr': "Volcanion Brillant",
		'es-es': "Volcanion Luminoso",
		'it-it': "Volcanion iridescente",
		'pt-br': "Volcanion Luminescente",
		'de-de': "Schimmerndes Volcanion"
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
				'en-us': "Dual Pump",
				'fr-fr': "Double Pompe",
				'es-es': "Bombeo Dual",
				'it-it': "Doppia Pompa",
				'pt-br': "Bomba Dupla",
				'de-de': "Doppelpumpe"
			},
			effect: {
				'en-us': "This attack does 50 damage to 2 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 50 dégâts à 2 des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 50 puntos de daño a 2 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 50 danni a due dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 50 pontos de dano a 2 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt 2 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
				'en-us': "Quad Smash",
				'fr-fr': "Quadruple Destruction",
				'es-es': "Golpe Cuádruple",
				'it-it': "Colpo Quadruplo",
				'pt-br': "Pancada Quádrupla",
				'de-de': "Quartettstoß"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 50 damage for each heads.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 4 monedas. Este ataque hace 50 puntos de daño por cada cara.",
				'it-it': "Lancia quattro volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa.",
				'pt-br': "Jogue 4 moedas. Este ataque causa 50 pontos de dano para cada cara.",
				'de-de': "Wirf 4 Münzen. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu."
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

	description: {
		'en-us': "It lets out billows of steam and disappears into the dense fog. It's said to live in mountains where humans do not tread.",
	},

	thirdParty: {
		cardmarket: 302165,
		tcgplayer: 146681
	}
}

export default card
