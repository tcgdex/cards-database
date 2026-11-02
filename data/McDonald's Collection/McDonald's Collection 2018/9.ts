import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2018'

const card: Card = {
	dexId: [147],
	set: Set,

	name: {
		en: "Dratini",
		de: "Dratini"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Signs of Evolution",
				de: "Spuren der Evolution"
			},
			effect: {
				en: "Search your deck for a Dratini, a Dragonair, and a Dragonite. reveal them, and put them into your hand. Then, shuffle your deck.",
				de: "Durchsuche dein Deck nach 1 Dratini, 1 Dragonir und 1 Dragoran, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},
		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Tail Smack",
				de: "Schweifschlag"
			},
			damage: 10,
		}
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		}
	],

	retreat: 2,

	illustrator: "Naoyo Kimura",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 366777,
				tcgplayer: 180457
			}
		}
	]
}

export default card

