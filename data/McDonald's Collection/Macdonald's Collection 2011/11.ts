import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2011'

const card: Card = {
	set: Set,
	illustrator: "Ken Sugimori",
	category: "Pokemon",

	description: {
		en: "These Pokémon live in cities. They are accustomed to people. Flocks often gather in parks and plazas."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Growl"
		},

		effect: {
			en: "During your opponent’s next turn, any damage done by attacks from the Defending Pokémon is reduced by 20 (before applying Weakness and Resistance)."
		}
	}, {
		name: {
			en: "Gust"
		},

		damage: 10
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Pidove"
	},

	rarity: "None",
	hp: 40,
	types: ["Colorless"]
}

export default card