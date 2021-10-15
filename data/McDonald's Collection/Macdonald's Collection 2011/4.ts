import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2011'

const card: Card = {
	set: Set,
	illustrator: "Ken Sugimori",
	category: "Pokemon",

	description: {
		en: "It fights using the scalchop on its stomach. In response to an attack, it retaliates immediately by slashing."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Water Pulse"
		},

		damage: 20,

		effect: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Asleep."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Oshawott"
	},

	rarity: "None",
	hp: 60,
	types: ["Water"]
}

export default card