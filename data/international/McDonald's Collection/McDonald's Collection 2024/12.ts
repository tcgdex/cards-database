import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2024'

const card: Card = {
	name: {
		'en-us': "Dragonite",
		'fr-fr': "Dracolosse",
		'es-es': "Dragonite",
		'it-it': "Dragonite",
		'pt-br': "Dragonite",
		'de-de': "Dragoran"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [149],

	hp: 160,

	types: ["Dragon"],

	stage: "Stage2",

	evolveFrom: {
		'en-us': "Dragonair",
		'fr-fr': "Draco",
		'es-es': "Dragonair",
		'it-it': "Dragonair",
		'pt-br': "Dragonair",
		'de-de': "Dragonir"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Jet Cruise"
			},
			effect: {
				'en-us': "Your Pokémon in play have no Retreat Cost."
			}
		}
	],

	attacks: [
		{
			cost: ["Water", "Lightning", "Colorless"],
			name: {
				'en-us': "Dragon Pulse",
			},
			damage: 180,
			effect: {
				'en-us': "Discard the top 2 cards of your deck.",
			},
		},
	],

	retreat: 3,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 802834,
				tcgplayer: 614381
			}
		}
	]
}

export default card

