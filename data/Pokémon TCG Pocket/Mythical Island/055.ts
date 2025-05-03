import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Scolipede"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	evolveFrom: {
		en: "Whirlipede"
	},

	description: {
		en: "Scolipede latches on to its prey with the claws on its neck before slamming them into the ground and jabbing them with its claws' toxic spikes."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Venoshock"
		},

		damage: "70+",
		cost: ["Darkness", "Colorless"],

		effect: {
			en: "If your opponent's Active Pokémon is Poisoned, this attack does 50 more damage."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond"
}

export default card
