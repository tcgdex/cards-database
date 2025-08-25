import { Card } from '../../../interfaces'
import Set from '../SM trainer Kit (Lycanroc)'

const card: Card = {
	dexId: [745],
	set: Set,

	name: {
		en: "Lycanroc",
		fr: "Lougaroc",
		es: "Lycanroc",
		it: "Lycanroc",
		pt: "Lycanroc",
		de: "Wolwerock"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	evolveFrom: {
		en: "Rockruff",
		fr: "Rocabot",
		es: "Rockruff",
		it: "Rockruff",
		pt: "Rockruff",
		de: "Wuffels"
	},

	stage: "Stage1",
	retreat: 1,
	illustrator: "5ban Graphics",

	description: {
		en: "The more intimidating the opponent it faces, the more this Pokémon’s blood boils. It will attack with no regard for its own safety."
	},

	attacks: [{
		name: {
			en: "Bite"
		},

		damage: 20
	}, {
		name: {
			en: "Claw Slash"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	thirdParty: {
		tcgplayer: 152838
	}
}

export default card