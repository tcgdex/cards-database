import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [974],
	set: Set,

	name: {
		'fr-fr': "Piétacé",
		'en-us': "Cetoddle",
		'es-es': "Cetoddle",
		'it-it': "Cetoddle",
		'pt-br': "Cetoddle",
		'de-de': "Flaniwal"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'fr-fr': "Avalanche",
			'en-us': "Avalanche",
			'es-es': "Alud",
			'it-it': "Slavina",
			'pt-br': "Avalanche",
			'de-de': "Lawine"
		},

		effect: {
			'fr-fr': "Cette attaque inflige aussi 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'en-us': "This attack also does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'es-es': "Este ataque también hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 10 pontos de dano a cada um dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt auch jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715528,
				tcgplayer: 497464,
				cardtrader: 248664
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			stamp: ['snowflake'],
			thirdParty: {
				cardmarket: 785460
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715528,
				tcgplayer: 497464,
				cardtrader: 248664
			}
		},
	],

	illustrator: "Sekio",

	description: {
		'en-us': "This species left the ocean and began living on land a very long time ago. It seems to be closely related to Wailmer.",
	},
}

export default card
