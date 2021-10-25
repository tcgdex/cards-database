import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Victini V"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	dexId: [494],
	hp: 190,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Spreading Flames"
		},

		effect: {
			en: "Attach up to 3 Fire Energy cards from your discard pile to your Pokémon in any way you like."
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			en: "Energy Burst"
		},

		effect: {
			en: "This attack does 30 damage for each Energy attached to both Active Pokémon."
		},

		damage: "30×"
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2
}

export default card