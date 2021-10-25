import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Octillery"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	rarity: "None",
	category: "Pokemon",
	dexId: [224],
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		en: "Remoraid"
	},

	description: {
		en: "It traps enemies with its suction-cupped tentacles, then smashes them with its rock-hard head."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Rapid Strike Search"
		},

		effect: {
			en: "Once during your turn, you may search your deck for a Rapid Strike card, reveal it, and put it into your hand. Then, shuffle your deck. You can't use more than 1 Rapid Strike Search Ability each turn."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Waterfall"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card