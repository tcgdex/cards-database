import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2019'

const card: Card = {
	set: Set,
	illustrator: "Megumi Mizutani",
	category: "Pokemon",

	description: {
		en: "These Pokémon are cherished in the Alola region, where they are thought to be feminine deities of the land incarnate."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Gold Rush"
		},

		damage: "30×",

		effect: {
			en: "Discard any number of Metal Energy cards from your hand. This attack does 30 damage for each card you discarded in this way."
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Alolan Dugtrio"
	},

	rarity: "None",
	hp: 60,
	types: ["Metal"],

	thirdParty: {
		tcgplayer: 200976
	}
}

export default card