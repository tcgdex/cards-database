import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2019'

const card: Card = {
	set: Set,
	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",

	description: {
		en: "It usually lives underground. It searches for food while boring its way through the ground at 50 miles per hour."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Screech"
		},

		effect: {
			en: "During your next turn, the Defending Pokémon takes 20 more damage from attacks (after applying Weakness and Resistance)."
		}
	}, {
		name: {
			en: "Rage"
		},

		damage: "10+",

		effect: {
			en: "This attack does 10 more damage for each damage counter on this Pokémon."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Onix"
	},

	rarity: "None",
	hp: 100,
	types: ["Fighting"],

	thirdParty: {
		tcgplayer: 200973
	}
}

export default card