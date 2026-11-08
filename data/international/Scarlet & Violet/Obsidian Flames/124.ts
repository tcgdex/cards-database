import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [1007],
	set: Set,

	name: {
		'fr-fr': "Koraidon-ex",
		'en-us': "Koraidon ex",
		'es-es': "Koraidon ex",
		'it-it': "Koraidon-ex",
		'pt-br': "Koraidon ex",
		'de-de': "Koraidon-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 230,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'fr-fr': "Rayon Divergent",
			'en-us': "Splitting Beam",
			'es-es': "Rayo Dividido",
			'it-it': "Raggio Scisso",
			'pt-br': "Feixe Dividido",
			'de-de': "Spaltstrahl"
		},

		effect: {
			'fr-fr': "Cette attaque inflige aussi 20 dégâts à 2 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'en-us': "This attack also does 20 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'es-es': "Este ataque también hace 20 puntos de daño a 2 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 20 danni a due dei Pokémon nella panchina del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 20 pontos de dano a 2 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt auch 2 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 20
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'fr-fr': "Pression de Gaïa",
			'en-us': "Gaia Press",
			'es-es': "Presión Gaia",
			'it-it': "Gaiapressa",
			'pt-br': "Compressão de Gaia",
			'de-de': "Gaiapresse"
		},

		effect: {
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'en-us': "This Pokémon also does 30 damage to itself.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 230
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725204,
				tcgplayer: 509878,
				cardtrader: 255809
			}
		},
	],

	suffix: "ex",
	illustrator: "aky CG Works",

	
}

export default card
