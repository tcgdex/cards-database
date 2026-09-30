import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Magnezone"
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	evolveFrom: {
		en: "Magneton"
	},

	description: {
		en: "As it zooms through the sky, this Pokémon seems\nto be receiving signals of unknown origin while\ntransmitting signals of unknown purpose."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Thunder Blast"
		},

		damage: 110,
		cost: ["Lightning", "Colorless", "Colorless"],

		effect: {
			en: "Discard a {L} Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card