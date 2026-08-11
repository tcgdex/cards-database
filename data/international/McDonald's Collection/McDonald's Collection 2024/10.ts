import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2024'

const card: Card = {
	name: {
		'en-us': "Hydreigon",
		'fr-fr': "Trioxhydre",
		'es-es': "Hydreigon",
		'it-it': "Hydreigon",
		'pt-br': "Hydreigon",
		'de-de': "Trikephalo"
	},

	illustrator: "Teeziro",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [635],

	hp: 180,

	types: ["Darkness"],

	stage: "Stage2",

	evolveFrom: {
		'en-us': "Zweilous",
		'fr-fr': "Diamat",
		'es-es': "Zweilous",
		'it-it': "Zweilous",
		'pt-br': "Zweilous",
		'de-de': "Duodino"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Tri Howl"
			},
			effect: {
				'en-us': "Once during your turn, you may look at the top 3 cards of your deck and attach any number of Energy cards you find there to your Pokémon in any way you like. Discard the other cards."
			}
		}
	],

	attacks: [
		{
			cost: ["Darkness", "Darkness", "Colorless"],
			name: {
				'en-us': "Dark Cutter",
			},
			damage: 160,
		}
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
			type: 'holo',
			thirdParty: {
				cardmarket: 802832,
				tcgplayer: 614379
			}
		}
	]
}

export default card

