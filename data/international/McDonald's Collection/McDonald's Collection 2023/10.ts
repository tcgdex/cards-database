import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2023'

const card: Card = {
	name: {
		'en-us': "Sandaconda",
		'fr-fr': "Dunaconda",
		'es-es': "Sandaconda",
		'it-it': "Sandaconda",
		'pt-br': "Sandaconda",
		'de-de': "Sanaconda"
	},

	illustrator: "Yuya Oka",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [844],

	hp: 140,

	types: ["Fighting"],

	stage: "Stage1",

	evolveFrom: {
		'en-us': "Silicobra",
		'fr-fr': "Dunaja",
		'es-es': "Silicobra",
		'it-it': "Silicobra",
		'pt-br': "Silicobra",
		'de-de': "Salanga"
	},

	attacks: [
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				'en-us': "Skull Bash",
			},
			damage: 30,
		},
		{
			cost: ["Fighting", "Fighting", "Fighting", "Colorless"],
			name: {
				'en-us': "Sandstorm Spray",
			},
			effect: {
				'en-us': "Discard 2 Energy from this Pokémon. If you discarded any Energy in this way, your opponent shuffles their Active Pokémon and all attached cards into their deck.",
			},
		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725427,
				tcgplayer: 516521
			}
		}
	]
}

export default card

