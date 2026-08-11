import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Aqua's Cacturne",
		'fr-fr': "Cacturne de Team Aqua",
		'de-de': "Team Aquas Noktuska"
	},

	illustrator: "K. Utsunomiya",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [332],

	hp: 80,

	types: [
		"Grass",
		"Darkness"
	],

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Dark Bind",
				'fr-fr': "Sombre étreinte",
				'de-de': "Dark Bind"
			},
			effect: {
				'en-us': "You may discard a Darkness Energy card attached to Team Aqua's Cacturne. If you do, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Vous pouvez défausser une carte Énergie  attachée à Cacturne de Team Aqua. Dans ce cas, le Pokémon Défenseur est maintenant Paralysé.",
				'de-de': "You may discard a  Energy card attached to Team Aqua's Cacturne. If you do, the Defending Pokémon is now Paralyzed."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poison Barb",
				'fr-fr': "Barbelés empoisonnés",
				'de-de': "Poison Barb"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "The Defending Pokémon is now Poisoned."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],


	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275778,
				tcgplayer: 89775
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275778,
				tcgplayer: 89775
			}
		},
	],

}

export default card
