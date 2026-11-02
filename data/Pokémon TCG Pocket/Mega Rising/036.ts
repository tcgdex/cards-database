import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Blaziken ex",
		fr: "Méga-Braségali-ex"
	},

	illustrator: "PLANETA Yamashita",
	rarity: "Four Diamond",
	category: "Pokemon",

	dexId: [257],
	hp: 210,
	types: ["Fire"],

	evolveFrom: {
		en: "Combusken",
		fr: "Galifeu"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Mega Burning",
			fr: "Méga Calcination"
		},

		damage: 120,
		cost: ["Fire", "Fire"],

		effect: {
			en: "Discard Fire{R} Energy from this Pokémon. Your opponent's Active Pokémon is now Burned.",
			fr: "Défaussez une Énergie {R} de ce Pokémon. Le Pokémon Actif de votre adversaire est maintenant Brûlé."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card