import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [514],
	set: Set,

	name: {
		'en-us': "Simisear",
		'fr-fr': "Flamoutan",
		'es-es': "Simisear",
		'it-it': "Simisear",
		'pt-br': "Simisear",
		'de-de': "Grillchita"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],
	evolveFrom: {
		'en-us': "Pansear",
		'fr-fr': "Flamajou",
		'es-es': "Pansear",
		'it-it': "Pansear",
		'pt-br': "Pansear",
		'de-de': "Grillmak"
	},
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Monkey Trio",
			'fr-fr': "Trio Simiesque",
			'es-es': "Trío de Monos",
			'it-it': "Trio delle Scimmie",
			'pt-br': "Trio Primata",
			'de-de': "Affentrio"
		},

		effect: {
			'en-us': "If you have Simisage, Simisear, and Simipour in play, ignore all {C} Energy in the costs of attacks used by this Pokémon.",
			'fr-fr': "Si vous avez Feuiloutan, Flamoutan et Flotoutan en jeu, ignorez toutes les Énergies {C} dans le coût des attaques utilisées par ce Pokémon.",
			'es-es': "Si tienes a Simisage, Simisear y Simipour en juego, ignora todas las Energías {C} en los costes de los ataques usados por este Pokémon.",
			'it-it': "Se hai in gioco Simisage, Simisear e Simipour, ignora tutte le Energie {C} necessarie per gli attacchi usati da questo Pokémon.",
			'pt-br': "Se você tiver Simisage, Simisear e Simipour em jogo, ignore todas as Energias {C} nos custos dos ataques usados por este Pokémon.",
			'de-de': "Wenn du Vegichita, Grillchita und Sodachita im Spiel hast, ignoriere alle {C}-Energien in den Kosten der von diesem Pokémon eingesetzten Attacken."
		}
	}],

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Heat Tackle",
			'fr-fr': "Charge Énergétique",
			'es-es': "Placaje Ardiente",
			'it-it': "Calorazione",
			'pt-br': "Golpe de Colisão Aquecido",
			'de-de': "Hitze-Tackle"
		},

		effect: {
			'en-us': "This Pokémon also does 30 damage to itself.",
			'fr-fr': "Ce Pokémon s'inflige aussi 30 dégâts.",
			'es-es': "Este Pokémon también se hace 30 puntos de daño a sí mismo.",
			'it-it': "Questo Pokémon infligge anche 30 danni a se stesso.",
			'pt-br': "Este Pokémon também causa 30 pontos de dano a si mesmo.",
			'de-de': "Dieses Pokémon fügt auch sich selbst 30 Schadenspunkte zu."
		},

		damage: 190
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "When it gets excited, embers rise from its head and tail and it gets hot. For some reason, it loves sweets.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740497,
				tcgplayer: 523622,
				cardtrader: 265096
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740497,
				tcgplayer: 523622,
				cardtrader: 265096
			}
		},
	],

	illustrator: "Yuya Oka",

	
}

export default card
