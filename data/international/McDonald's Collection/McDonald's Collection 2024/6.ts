import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2024'

const card: Card = {
	name: {
		'en-us': "Dragapult",
		'fr-fr': "Lanssorien",
		'es-es': "Dragapult",
		'it-it': "Dragapult",
		'pt-br': "Dragapult",
		'de-de': "Katapuldra"
	},

	illustrator: "Teeziro",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [887],

	hp: 150,

	types: ["Psychic"],

	stage: "Stage2",

	evolveFrom: {
		'en-us': "Drakloak",
		'fr-fr': "Dispareptil",
		'es-es': "Drakloak",
		'it-it': "Drakloak",
		'pt-br': "Drakloak",
		'de-de': "Phandra"
	},

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'en-us': "Dragon Launcher",
			},
			effect: {
				'en-us': "Discard a number of your Benched Dreepy up to the number of your opponent's Pokémon in play. Then, for each Dreepy you discarded in this way, choose 1 of your opponent's Pokémon and do 100 damage to it. You can't choose the same Pokémon more than once. This damage isn't affected by Weakness or Resistance"
			}
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				'en-us': "Spooky Shot",
			},
			damage: 120,
		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 1,

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 802828,
				tcgplayer: 614375
			}
		}
	]
}

export default card

