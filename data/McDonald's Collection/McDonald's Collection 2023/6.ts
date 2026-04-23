import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2023'

const card: Card = {
	name: {
		en: "Pikachu",
		fr: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		pt: "Pikachu",
		de: "Pikachu"
	},

	illustrator: "OKACHEKE",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [25],

	hp: 70,

	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				en: "Growl",
			},
			effect: {
				en: "During your opponent's next turn, the Defending Pokémon's attacks do 20 less damage (before applying Weakness and Resistance)."
			}
		},
		{
			cost: ["Lightning", "Colorless"],
			name: {
				en: "Pika Bolt",
			},
			damage: 30,
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
				cardmarket: 725423,
				tcgplayer: 516517
			}
		}
	]
}

export default card

