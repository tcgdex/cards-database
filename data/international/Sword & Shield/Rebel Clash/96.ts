import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [299],

	name: {
		'en-us': "Nosepass",
		'fr-fr': "Tarinor",
		'es-es': "Nosepass",
		'it-it': "Nosepass",
		'pt-br': "Nosepass",
		'de-de': "Nasgnet"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'es-es': "Placaje",
				'it-it': "Azione",
				'pt-br': "Investida",
				'de-de': "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rolling Tackle",
				'fr-fr': "Roulé-Boulé",
				'es-es': "Placaje Giro",
				'it-it': "Rollazione",
				'pt-br': "Golpe de Colisão Rolante",
				'de-de': "Rolltackle"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,
	hp: 80,
	types: ["Fighting"],
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It hunts without twitching a muscle by pulling in its prey with powerful magnetism. But sometimes it pulls natural enemies in close."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 457893,
				tcgplayer: 213184
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 457893,
				tcgplayer: 213184
			}
		},
	],
}

export default card
