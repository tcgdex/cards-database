import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "aky CG Works",
	category: "Pokemon",
	stage: "Basic",
	suffix: "V",

	name: {
		en: "Boltund V"
	},

	rarity: "None",
	dexId: [836],
	hp: 200,
	types: ["Lightning"],

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Electrify"
		},

		effect: {
			en: "Search your deck for up to 2 Lightning Energy cards and attach them to your Benched Pokémon in any way you like. Then, shuffle your deck."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Bolt Storm"
		},

		effect: {
			en: "This attack does 30 more damage for each Lightning Energy attached to all of your Pokémon."
		},

		damage: "10+"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card