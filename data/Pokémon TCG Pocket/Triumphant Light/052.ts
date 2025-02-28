import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Toxicroak"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		en: "Croagunk"
	},

	description: {
		en: "Swaying and dodging the attacks of its foes, it<br />weaves its flexible body in close, then lunges<br />out with its poisonous claws."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Toxic"
		},

		cost: ["Darkness"],

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned. Do 20 damage to this Pokémon instead of the usual amount for this Special Condition."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card