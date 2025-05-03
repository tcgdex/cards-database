import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Magnezone"
	},

	illustrator: "toriyufu",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],

	evolveFrom: {
		en: "Magneton"
	},

	description: {
		en: "As it zooms through the sky, this Pokémon seems to be receiving signals of unknown origin while transmitting signals of unknown purpose."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Resilience Link"
		},

		effect: {
			en: "If you have Arceus or Arceus ex in play, this Pokémon takes −30 damage from attacks."
		}
	}],

	attacks: [{
		name: {
			en: "Power Beam"
		},

		damage: 80,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card
