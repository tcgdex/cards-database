import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Golem"
	},

	illustrator: "kawayoo",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	evolveFrom: {
		en: "Alolan Graveler"
	},

	description: {
		en: "It's grumpy and stubborn. If you upset it, it discharges electricity from the surface of its body and growls with a voice like thunder."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Super Zap Cannon"
		},

		damage: 150,
		cost: ["Lightning", "Lightning", "Colorless", "Colorless"],

		effect: {
			en: "Discard 2 Lightning Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 4
}

export default card
