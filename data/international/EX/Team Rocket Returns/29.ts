import { Card } from 'models/database/card'
import Set from '../Team Rocket Returns'

const card: Card = {
	name: {
		'en-us': "Dark Arbok",
		'de-de': "Dunkles Arbok"
	},

	illustrator: "Nakaoka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		24,
	],

	hp: 90,

	types: [
		"Grass",
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Ekans",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Swallow Up",
				'de-de': "Swallow Up"
			},
			effect: {
				'en-us': "Before doing damage, count the remaining HP of the Defending Pokémon and Dark Arbok. If the Defending Pokémon has fewer remaining HP than Dark Arbok's, this attack does 10 damage plus 30 more damage.",
				'de-de': "Before doing damage, count the remaining HP of the Defending Pokémon and Dark Arbok. If the Defending Pokémon has fewer renaining HP than Dark Arbok´s this attack does 10 damage plus 30 more damage."
			},
			damage: "10+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Extra Poison",
				'de-de': "Extra Poison"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Pokémon-ex, the Defending Pokémon is now Asleep and Poisoned.",
				'de-de': "If the Defending Pokémon is Pokémon-ex, the Defending Pokémon is now Asleep and Poisoned."
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


	variants: [
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 276321,
				tcgplayer: 84565
			},
		},
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276321,
				tcgplayer: 84565
			},
		},
	],

}

export default card

