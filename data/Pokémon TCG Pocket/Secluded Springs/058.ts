import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Lickilicky"
	},

	illustrator: "Mina Nakai",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	evolveFrom: {
		en: "Lickitung"
	},

	description: {
		en: "Lickilicky's strange tongue can stretch to many\ntimes the length of its body. No one has figured\nout how Lickilicky's tongue can stretch so far."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Stretch Tongue"
		},

		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "This attack does 60 damage to 1 of your opponent's Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card