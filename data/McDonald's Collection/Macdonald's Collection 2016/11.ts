import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2016'

const card: Card = {
	set: Set,
	illustrator: "Kanako Eo",
	category: "Pokemon",

	description: {
		en: "Adores round objects. It wanders the streets on a nightly basis to look for dropped loose change."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Act Tough"
		},

		damage: "10+",

		effect: {
			en: "If this Pokémon has any Darkness Energy attached to it, this attack does 20 more damage."
		}
	}],

	name: {
		en: "Meowth"
	},

	rarity: "None"
}

export default card