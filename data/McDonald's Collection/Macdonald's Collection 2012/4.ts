import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2012'

const card: Card = {
	set: Set,
	illustrator: "Kouki Saitou",
	category: "Pokemon",


	dexId: [499],
	description: {
		en: "When its internal fire flares up, its movements grow sharper and faster. When in trouble, it emits smoke."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Flame Charge"
		},

		effect: {
			en: "Search your deck for a Fire Energy card and attach it to this Pokémon. Shuffle your deck afterward."
		}
	}, {
		name: {
			en: "Heat Crash"
		},

		damage: 50
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Pignite"
	},

	rarity: "None",
	hp: 100,
	types: ["Fire"],

	thirdParty: {
		tcgplayer: 88064
	}
}

export default card