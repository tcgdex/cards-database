import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2014'

const card: Card = {
	dexId: [
		686,
	],
	illustrator: "5ban Graphics",
	description: {
		en: "Opponents who stare at the flashing of the light-emitting spots on its body become dazed and lose their will to fight."
	},
	set: Set,
	name: {
		en: "Inkay",
		fr: "Sepiatop",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Darkness",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Peck",
				fr: "Picpic",
			},
			damage: "10",
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		}
	],
	retreat: 1,
	variants: [
		{
			type: 'holo',
			stamp: ["mcdonalds"],

			thirdParty: {
				cardmarket: 281658,
				tcgplayer: 110411
			}
		}
	]
}

export default card

