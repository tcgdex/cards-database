import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2016'

const card: Card = {
	set: Set,
	illustrator: "Naoki Saito",
	category: "Pokemon",

	dexId: [25],

	description: {
		en: "It raises its tail to check its surroundings. The tail is sometimes struck by lightning in this pose."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Tail Whip"
		},

		effect: {
			en: "Flip a coin. If heads, the Defending Pokémon can’t attack during your opponent’s next turn."
		}
	}, {
		name: {
			en: "Electro Ball"
		},

		damage: 30
	}],

	name: {
		en: "Pikachu"
	},

	rarity: "None",

	thirdParty: {
		tcgplayer: 275062
	}
}

export default card