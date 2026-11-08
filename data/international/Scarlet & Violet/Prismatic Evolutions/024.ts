import { Card } from "models/database/card"
import Set from "../Prismatic Evolutions"

const card: Card = {
	dexId: [245],
	set: Set,

	name: {
		'en-us': "Suicune",
		'fr-fr': "Suicune",
		'es-es': "Suicune",
		'pt-br': "Suicune",
		'it-it': "Suicune",
		'de-de': "Suicune"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Overrun",
			'fr-fr': "Dépassement",
			'es-es': "Rebasar",
			'pt-br': "Atropelar",
			'it-it': "Oltrepassare",
			'de-de': "Überrennen"
		},

		effect: {
			'en-us': "This attack also does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 30 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'pt-br': "Este ataque também causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'it-it': "Questo attacco infligge anche 30 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 30
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Aurora Beam",
			'fr-fr': "Onde Boréale",
			'es-es': "Rayo Aurora",
			'pt-br': "Raio Aurora",
			'it-it': "Raggiaurora",
			'de-de': "Aurorastrahl"
		},

		damage: 100
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",
	illustrator: "Kuroimori",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 805413,
				tcgplayer: 610379
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 805413,
				tcgplayer: 610379
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 806442,
				tcgplayer: 610553
			}
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 806443,
				tcgplayer: 610654
			}
		},
	],
}

export default card
