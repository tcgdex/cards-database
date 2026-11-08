import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [975],
	set: Set,

	name: {
		'en-us': "Cetitan",
		'fr-fr': "Balbalèze",
		'es-es': "Cetitan",
		'it-it': "Cetitan",
		'pt-br': "Cetitan",
		'de-de': "Kolowal"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Cetoddle",
		'fr-fr': "Piétacé",
		'es-es': "Cetoddle",
		'it-it': "Cetoddle",
		'pt-br': "Cetoddle",
		'de-de': "Flaniwal"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Avalanche",
			'fr-fr': "Avalanche",
			'es-es': "Alud",
			'it-it': "Slavina",
			'pt-br': "Avalanche",
			'de-de': "Lawine"
		},

		effect: {
			'en-us': "This attack also does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 10 pontos de dano a cada um dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 30
	}, {
		cost: ["Water", "Water", "Water"],

		name: {
			'en-us': "Rolling Slider",
			'fr-fr': "Frappe Roulante",
			'es-es': "Deslizamiento Rodante",
			'it-it': "Rotoscivolata",
			'pt-br': "Deslizar Rolante",
			'de-de': "Rollendes Geschlitter"
		},

		effect: {
			'en-us': "Flip 3 coins. This attack does 100 damage for each heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 100 dégâts pour chaque côté face.",
			'es-es': "Lanza 3 monedas. Este ataque hace 100 puntos de daño por cada cara.",
			'it-it': "Lancia tre volte una moneta. Questo attacco infligge 100 danni ogni volta che esce testa.",
			'pt-br': "Jogue 3 moedas. Este ataque causa 100 pontos de dano para cada cara.",
			'de-de': "Wirf 3 Münzen. Diese Attacke fügt 100 Schadenspunkte pro Kopf zu."
		},

		damage: "100×"
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 4,
	regulationMark: "G",
	illustrator: "GOSSAN",
	description: {
		'en-us': "This Pokémon wanders around snowy, icy areas. It protects its body with powerful muscles and a thick layer of fat under its skin.",
	},
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 729207,
				tcgplayer: 561591
			},
		}
	],
}

export default card
