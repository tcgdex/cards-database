import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Type: Null"
	},

	illustrator: "match",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		en: "A Pokémon weapon developed for a specific<br />mission, it went berserk during an experiment,<br />so it was cryogenically frozen."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Quick Blow"
		},

		damage: 20,
		cost: ["Colorless"],

		effect: {
			en: "Flip a coin. If heads, this attack does 20 more damage."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card