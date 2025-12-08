import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2016'

const card: Card = {
	set: Set,
	illustrator: "Kanako Eo",
	category: "Pokemon",

	description: {
		en: "It captivates foes with its huge, round eyes, then lulls them to sleep by singing a soothing melody."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Rollout"
		},

		damage: 10
	}, {
		name: {
			en: "Heartfelt Song"
		},

		effect: {
			en: "Discard a Darkness Energy attached to your opponent’s Active Pokémon."
		}
	}],

	name: {
		en: "Jigglypuff"
	},

	rarity: "None",

	thirdParty: {
		tcgplayer: 275064
	}
}

export default card
