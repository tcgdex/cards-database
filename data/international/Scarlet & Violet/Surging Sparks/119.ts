import { Card } from "models/database/card"
import Set from "../Surging Sparks"

const card: Card = {
	dexId: [635],
	set: Set,

	name: {
		'en-us': "Hydreigon ex",
		'fr-fr': "Trioxhydre-ex",
		'es-es': "Hydreigon ex",
		'it-it': "Hydreigon-ex",
		'pt-br': "Hydreigon ex",
		'de-de': "Trikephalo-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],
	evolveFrom: {
		'en-us': "Zweilous",
		'fr-fr': "Diamat",
		'es-es': "Zweilous",
		'it-it': "Zweilous",
		'pt-br': "Zweilous",
		'de-de': "Duodino"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Crashing Headbutt",
			'fr-fr': "Coup d'Boule Percutant",
			'es-es': "Cabezazo Demoledor",
			'it-it': "Bottintesta Schiacciante",
			'pt-br': "Cabeçada Estrondosa",
			'de-de': "Krachender Kopfstoß"
		},

		effect: {
			'en-us': "Discard the top 3 cards of your opponent's deck.",
			'fr-fr': "Défaussez les 3 cartes du dessus du deck de votre adversaire.",
			'es-es': "Descarta las 3 primeras cartas de la baraja de tu rival.",
			'it-it': "Scarta le prime tre carte del mazzo del tuo avversario.",
			'pt-br': "Descarte as 3 cartas de cima do baralho do seu oponente.",
			'de-de': "Lege die obersten 3 Karten des Decks deines Gegners auf seinen Ablagestapel."
		},

		damage: 200
	}, {
		cost: ["Psychic", "Darkness", "Metal", "Colorless"],

		name: {
			'en-us': "Obsidian",
			'fr-fr': "Obsidienne",
			'es-es': "Obsidiana",
			'it-it': "Ossidiana",
			'pt-br': "Obsidiana",
			'de-de': "Obsidian"
		},

		effect: {
			'en-us': "This attack also does 130 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 130 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 130 puntos de daño a 2 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 130 danni a due dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 130 pontos de dano a 2 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt auch 2 Pokémon auf der Bank deines Gegners 130 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 130
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 794461,
				tcgplayer: 589965
			}
		},
	],

	suffix: "ex",
	illustrator: "5ban Graphics",

}

export default card
