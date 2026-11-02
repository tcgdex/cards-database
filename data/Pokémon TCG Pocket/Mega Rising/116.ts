import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Aromatisse",
		fr: "Cocotine"
	},

	illustrator: "kirisAki",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [683],
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		en: "Spritzee",
		fr: "Fluvetin"
	},

	description: {
		en: "The scents Aromatisse can produce range from\nsweet smells that bolster allies to foul smells\nthat sap an opponent's will to fight."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Confounding Cologne",
			fr: "Fragrance Étourdissante"
		},

		damage: 40,
		cost: ["Psychic"],

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card