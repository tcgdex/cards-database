import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Blissey ex",
		de: "Heiteira-ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",

	dexId: [242],
	hp: 180,
	types: ["Colorless"],

	evolveFrom: {
		en: "Chansey",
		de: "Chaneira"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Happy Punch",
			de: "Freudenschlag"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, heal 60 damage from this Pokémon.",
			de: "Wirf 1 Münze. Heile bei Kopf 60 Schadenspunkte bei diesem Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card