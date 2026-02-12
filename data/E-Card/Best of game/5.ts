import { Card } from '../../../interfaces'
import Set from '../Best of game'

const card: Card = {
	set: Set,

	name: {
		en: "Rocket’s Sneasel"
	},

	illustrator: "Katsura Tabata",
	rarity: "None",
	category: "Pokemon",	
	types: ["Darkness",],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			en: "Entrap"
		},

		effect: {
			en: "The Defending Pokémon can’t retreat during your opponent’s next turn."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Continuous Scratch"
		},

		damage: "10×",

		effect: {
			en: "Flip 4 coins. This attack does 10 damage times the number of heads."
		}
	}],

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["winner"]
		},
		{
			type: "normal",
			stamp: ["winner"],
			size: "jumbo"
		}
	]
}

export default card
