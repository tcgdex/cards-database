import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Pidgeot ex"
	},

	illustrator: "PLANETA CG Works",
	category: "Pokemon",
	hp: 170,
	types: ["Colorless"],

	evolveFrom: {
		en: "Pidgeotto"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Scattering Cyclone"
		},

		damage: "80+",
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "This attack does 20 more damage for each of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Four Diamond"
}

export default card
