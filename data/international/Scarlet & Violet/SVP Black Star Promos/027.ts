import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'es-es': "Pikachu",
		'it-it': "Pikachu",
		'pt-br': "Pikachu",
		'de-de': "Pikachu"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			'en-us': "Adventuring Together",
			'fr-fr': "Aventure en Groupe",
			'es-es': "Juntos de Aventura",
			'it-it': "Avventure in Compagnia",
			'pt-br': "Aventura em Grupo",
			'de-de': "Gemeinsames Abenteuer"
		},

		effect: {
			'en-us': "This attack does 10 more damage for each of your Benched Pokémon.",
			'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chacun de vos Pokémon de Banc.",
			'es-es': "Este ataque hace 10 puntos de daño más por cada uno de tus Pokémon en Banca.",
			'it-it': "Questo attacco infligge 10 danni in più per ogni Pokémon nella tua panchina.",
			'pt-br': "Este ataque causa 10 pontos de dano a mais para cada um dos seus Pokémon no Banco.",
			'de-de': "Diese Attacke fügt für jedes Pokémon auf deiner Bank 10 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
	illustrator: "Atsushi Furusawa",
	description: {
		'en-us': "Pikachu seems excited to be going on an adventure, and so do its new pals, from attention-seeking Sprigatito to laid-back Fuecoco and tidy Quaxly.",
	},
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 703195,
				tcgplayer: 500263
			},
		},
		{
			type: "holo",
			stamp: ["pokemon-center"],
			thirdParty: {
				cardmarket: 703196,
				tcgplayer: 500264
			},
		}
	],
}

export default card
