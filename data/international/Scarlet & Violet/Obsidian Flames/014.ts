import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [723],
	set: Set,

	name: {
		'fr-fr': "Efflèche",
		'en-us': "Dartrix",
		'es-es': "Dartrix",
		'it-it': "Dartrix",
		'pt-br': "Dartrix",
		'de-de': "Arboretoss"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	evolveFrom: {
		'fr-fr': "Brindibou",
		'en-us': "Rowlet",
		'es-es': "Rowlet",
		'it-it': "Rowlet",
		'pt-br': "Rowlet",
		'de-de': "Bauz"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			'fr-fr': "Passer à Travers",
			'en-us': "Shoot Through",
			'es-es': "Cruzar Rápido",
			'it-it': "Sparainmezzo",
			'pt-br': "Tiro Vazante",
			'de-de': "Durchschießen"
		},

		effect: {
			'fr-fr': "Cette attaque inflige aussi 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'en-us': "This attack also does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'es-es': "Este ataque también hace 20 puntos de daño a uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 20 danni a uno dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt auch 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "Supremely sensitive to the presence of others, it can detect opponents standing behind it, flinging its sharp feathers to take them out.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 789504,
				tcgplayer: 509705,
				cardtrader: 255574
			}
		},
		{
			type: 'holo',
			foil: 'cosmos',
			thirdParty: {
				cardmarket: 725094
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725094,
				tcgplayer: 509705,
				cardtrader: 255574
			}
		},
	],

	illustrator: "sui",

	
}

export default card
