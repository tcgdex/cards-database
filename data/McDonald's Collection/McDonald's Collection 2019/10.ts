import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2019'

const card: Card = {
	set: Set,
	illustrator: "Akira Komayama",
	category: "Pokemon",

	dexId: [52],

	description: {
		en: "When its delicate pride is wounded, or when the gold coin on its forehead is dirtied, it flies into a hysterical rage."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Spoil the Fun"
		},

		damage: "10+",

		effect: {
			en: "If you go second, this attack does 60 more damage during your first turn."
		}
	}],

	name: {
		en: "Alolan Meowth"
	},

	rarity: "None",
	hp: 60,
	types: ["Darkness"],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
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
			thirdParty: {
				cardmarket: 412894,
				tcgplayer: 200975
			}
		}
	]
}

export default card

