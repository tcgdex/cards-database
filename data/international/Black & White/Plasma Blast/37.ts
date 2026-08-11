import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Mesprit",
		'fr-fr': "Créfollet",
		'es-es': "Mesprit",
		'it-it': "Mesprit",
		'pt-br': "Mesprit",
		'de-de': "Vesprit"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		481,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Mental Shroud",
				'fr-fr': "Écran Mental",
				'es-es': "Velo MentalBarrera Mental",
				'it-it': "Manto Psichico",
				'pt-br': "Cortina Mental",
				'de-de': "Gedankengardine"
			},
			effect: {
				'en-us': "If you have Uxie and Azelf in play, each of your Pokémon has no Weakness.",
				'fr-fr': "Si vous avez Créhelf et Créfadet en jeu, chacun de vos Pokémon n’a pas de Faiblesse.",
				'es-es': "Si tienes a Uxie y a Azelf en juego, cada uno de tus Pokémon no tiene ninguna Debilidad.",
				'it-it': "Se hai Uxie e Azelf in gioco, nessuno dei tuoi Pokémon ha debolezza.",
				'pt-br': "Caso você possua Uxie e Azelf em jogo, seus Pokémon não terão Fraqueza.",
				'de-de': "Wenn du Selfe und Tobutz im Spiel hast, hat jedes deiner Pokémon keine Schwäche."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psyshot",
				'fr-fr': "Piqûre Psy",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When Mesprit flew, people learned the joy and sadness of living. It was the birth of emotions.",
	},

	thirdParty: {
		cardmarket: 281058,
		tcgplayer: 87333
	}
}

export default card
