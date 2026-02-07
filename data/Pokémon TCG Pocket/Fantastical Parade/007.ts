import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Cacturne"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		en: "Cacnea"
	},

	description: {
		en: "It lives in deserts. It becomes active at night\nwhen it hunts for prey exhausted from the\ndesert's heat."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Spike Rend"
		},

		damage: 60,
		cost: ["Grass", "Grass", "Colorless"],

		effect: {
			en: "If your opponent's Active Pokémon has damage on it, this attack does 60 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card