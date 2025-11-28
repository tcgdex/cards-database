import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2012'

const card: Card = {
	set: Set,
	illustrator: "Kouki Saitou",
	category: "Pokemon",


	dexId: [511],
	description: {
		en: "This Pokémon dwells deep in the forest. Eating a leaf from its head whisks weariness away as if by magic."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Collect"
		},

		effect: {
			en: "Draw a card."
		}
	}, {
		name: {
			en: "Scratch"
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
		en: "Pansage"
	},

	rarity: "None",
	hp: 70,
	types: ["Grass"],

	thirdParty: {
		tcgplayer: 87937
	}
}

export default card