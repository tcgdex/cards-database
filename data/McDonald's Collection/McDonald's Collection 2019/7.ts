import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2019'

const card: Card = {
	set: Set,
	illustrator: "Shibuzoh.",
	category: "Pokemon",

	dexId: [92],

	description: {
		en: "Should a strange light be seen flickering in an abandoned building, Gastly is lurking there."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Ominous Eyes"
		},

		effect: {
			en: "Put 1 damage counter on 1 of your opponent’s Pokémon."
		}
	}],

	name: {
		en: "Gastly"
	},

	rarity: "None",
	hp: 50,
	types: ["Psychic"],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		}
	],

	retreat: 1,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 412879,
				tcgplayer: 200969
			}
		}
	]
}

export default card

