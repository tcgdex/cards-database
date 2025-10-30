import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Avalugg"
	},

	illustrator: "Kouki Saitou",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		en: "Bergmite"
	},

	description: {
		en: "This Pokémon uses its massive icy body to flatten\nanything that gets in its way. When it's floating\nout on the ocean, it looks exactly like drift ice."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Frost Barrier"
		},

		damage: 70,
		cost: ["Water", "Water", "Colorless"],

		effect: {
			en: "During your opponent's next turn, this Pokémon takes −20 damage from attacks."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 4
}

export default card