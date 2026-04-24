import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2024'

const card: Card = {
	name: {
		en: "Pikachu",
		fr: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		pt: "Pikachu",
		de: "Pikachu"
	},

	illustrator: "Naoyo Kimura",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [25],

	hp: 60,

	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				en: "Charge",
			},
			effect: {
				en: "Search your deck for a Basic Lightning Energy card and attach it to this Pokémon. Then, shuffle your deck."
			}
		},
		{
			cost: ["Lightning", "Lightning", "Colorless"],
			name: {
				en: "Pika Punch",
			},
			damage: 50,
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 802824,
				tcgplayer: 614371
			}
		}
	]
}

export default card

