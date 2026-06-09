import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Blaziken"
	},

	illustrator: "GOSSAN",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [257],
	hp: 140,
	types: ["Fire"],

	evolveFrom: {
		en: "Combusken"
	},

	description: {
		en: "When facing a tough foe, it looses flames from\nits wrists. Its powerful legs let it jump clear\nover buildings."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Blaze Kick"
		},

		damage: 100,
		cost: ["Fire", "Fire"],

		effect: {
			en: "Discard a {R} Energy from this Pokémon."
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