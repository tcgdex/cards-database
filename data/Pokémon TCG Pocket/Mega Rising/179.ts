import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Goodra",
		fr: "Muplodocus"
	},

	illustrator: "Nagomi Nijo",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [706],
	hp: 150,
	types: ["Dragon"],

	evolveFrom: {
		en: "Sliggoo",
		fr: "Colimucus"
	},

	description: {
		en: "This Pokémon is uncontrollable when enraged.\nIt rampages on and on, lashing its tail with\nenough power to send a dump truck flying."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Spiral Drain",
			fr: "Spirale Épuisante"
		},

		damage: 100,
		cost: ["Water", "Psychic", "Colorless"],

		effect: {
			en: "Heal 40 damage from this Pokémon.",
			fr: "Soignez 40 dégâts de ce Pokémon."
		}
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-altaria"]
}

export default card