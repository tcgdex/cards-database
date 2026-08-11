import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Deino",
		'fr-fr': "Solochi",
		'es-es': "Deino",
		'it-it': "Deino",
		'pt-br': "Deino",
		'de-de': "Kapuno"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		633,
	],

	hp: 60,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Guard Press",
				'fr-fr': "Pression de Garde",
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 10 (after applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Headbutt",
				'fr-fr': "Coup d'Boule",
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "They cannot see, so they tackle and bite to learn about their surroundings. Their bodies are covered in wounds.",
	},

	thirdParty: {
		cardmarket: 280532,
		tcgplayer: 84730
	}
}

export default card
