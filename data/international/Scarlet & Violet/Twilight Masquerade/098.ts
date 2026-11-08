import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [28],
	set: Set,

	name: {
		'en-us': "Sandslash",
		'fr-fr': "Sablaireau",
		'es-es': "Sandslash",
		'it-it': "Sandslash",
		'pt-br': "Sandslash",
		'de-de': "Sandamer"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	evolveFrom: {
		'en-us': "Sandshrew",
		'fr-fr': "Sabelette",
		'es-es': "Sandshrew",
		'it-it': "Sandshrew",
		'pt-br': "Sandshrew",
		'de-de': "Sandan"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Dig Claws",
			'fr-fr': "Creusogriffes",
			'es-es': "Hundir Garras",
			'it-it': "Scavazanne",
			'pt-br': "Fincar Garras",
			'de-de': "Schaufelkrallen"
		},

		damage: 30
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'en-us': "Earthquake",
			'fr-fr': "Séisme",
			'es-es': "Terremoto",
			'it-it': "Terremoto",
			'pt-br': "Terremoto",
			'de-de': "Erdbeben"
		},

		effect: {
			'en-us': "This attack also does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'fr-fr': "Cette attaque inflige aussi 10 dégâts à chacun de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'es-es': "Este ataque también hace 10 puntos de daño a cada uno de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge anche 10 danni a ciascuno dei Pokémon nella tua panchina. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque também causa 10 pontos de dano a cada um dos seus Pokémon no Banco. (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
			'de-de': "Diese Attacke fügt auch jedem Pokémon auf deiner Bank 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	description: {
		'en-us': "The spikes on its body are made up of its hardened hide. It rolls up and attacks foes with its spikes.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769272,
				tcgplayer: 550142
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769272,
				tcgplayer: 550142
			}
		},
	],

	illustrator: "Nisota Niso",

}

export default card