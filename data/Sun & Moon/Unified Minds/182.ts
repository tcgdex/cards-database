import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Oranguru",
		fr: "Gouroutan",
	},
	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		765,
	],
	hp: 120,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sage's Riddle",
				fr: "Charade du Grand Sage",
			},
			effect: {
				en: "Put a Pokémon from your hand face down in front of you. Your opponent guesses the type of that Pokémon, and then you reveal it. If your opponent guessed right, they draw 4 cards. If they guessed wrong, you draw 4 cards. Return the Pokémon to your hand.",
				fr: "Placez un Pokémon de votre main devant vous, face cachée. Votre adversaire devine le type de ce Pokémon, puis vous le retournez. Si votre adversaire a bien deviné, il pioche 4 cartes. S’il a mal deviné, vous piochez 4 cartes. Remettez ce Pokémon dans votre main.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gentle Slap",
				fr: "Gifle Douce",
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
