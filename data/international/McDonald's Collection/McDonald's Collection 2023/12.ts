import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2023'

const card: Card = {
	name: {
		'en-us': "Blissey",
		'fr-fr': "Leuphorie",
		'es-es': "Blissey",
		'it-it': "Blissey",
		'pt-br': "Blissey",
		'de-de': "Heiteira"
	},

	illustrator: "chibi",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [242],

	hp: 150,

	types: ["Colorless"],

	stage: "Stage2",

	evolveFrom: {
		'en-us': "Chansey",
		'fr-fr': "Leveinard",
		'es-es': "Chansey",
		'it-it': "Chansey",
		'pt-br': "Chansey",
		'de-de': "Chaneira"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Busybody Nurse"
			},
			effect: {
				'en-us': "Once during your turn, you may use this Ability. Your Active Pokémon recovers from all Special Conditions."
			}
		}
	],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'en-us': "Happy Cyclone",
			},
			effect: {
				'en-us': "Move all Energy from this Pokémon to 1 of your Benched Pokémon."
			},
			damage: 150,
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725429,
				tcgplayer: 516523
			}
		}
	]
}

export default card

