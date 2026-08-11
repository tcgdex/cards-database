import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Victini",
		'fr-fr': "Victini",
		'es-es': "Victini",
		'it-it': "Victini",
		'pt-br': "Victini",
		'de-de': "Victini"
	},

	illustrator: "sowsow",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		494,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "V-Beatdown",
				'fr-fr': "Dérouillée Victoire",
				'es-es': "Doblegar V",
				'it-it': "Batosta V",
				'pt-br': "Surra V",
				'de-de': "V-Niederprügler"
			},
			effect: {
				'en-us': "This attack does 20 damage for each of your Basic Pokémon in play.",
				'fr-fr': "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon de base en jeu.",
				'es-es': "Este ataque hace 20 puntos de daño por cada uno de tus Pokémon Básicos en juego.",
				'it-it': "Questo attacco infligge 20 danni per ogni tuo Pokémon Base in gioco.",
				'pt-br': "Este ataque causa 20 pontos de dano para cada um dos seus Pokémon Básicos em jogo.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl deiner Basis-Pokémon im Spiel zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When it shares the infinite energy it creates, that being's entire body will be overflowing with power.",
	},

	thirdParty: {
		cardmarket: 365689,
		tcgplayer: 178854
	}
}

export default card
