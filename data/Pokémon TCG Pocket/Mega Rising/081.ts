import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Jolteon ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",

	dexId: [135],
	hp: 140,
	types: ["Lightning"],

	evolveFrom: {
		en: "Eevee"
	},

	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Electromagnetic Wall"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, whenever your opponent attaches an Energy from their Energy Zone to 1 of their Pokémon, do 20 damage to that Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Mach Bolt"
		},

		damage: 80,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-gyarados"]
}

export default card