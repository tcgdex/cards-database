import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2012'

const card: Card = {
	set: Set,
	illustrator: "MAHOU",
	category: "Pokemon",

	description: {
		en: "The Pokémon can easily melt holes in hard rocks with a liquid secreted from its mouth."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Withdraw"
		},

		effect: {
			en: "Flip a coin. If heads, prevent all damage done to this Pokémon by attacks during your opponent’s next turn."
		}
	}, {
		name: {
			en: "Slash"
		},

		damage: 20
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Dwebble"
	},

	rarity: "None",
	hp: 60,
	types: ["Grass"],

	thirdParty: {
		tcgplayer: 85065
	}
}

export default card