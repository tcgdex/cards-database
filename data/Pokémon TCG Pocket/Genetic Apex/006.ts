import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Metapod",
		fr: "Chrysacier"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",
	evolveFrom: {
		en: "Caterpie",
		fr: "Chenipan"
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Bug Bite",
			fr: "Piqûre"
		},

		damage: "30"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Diamond",

	description: {
		en: "It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.",
		fr: "En attendant sa prochaine évolution, il ne peut que durcir sa carapace et rester immobile pour éviter de se faire attaquer."
	}
}

export default card
