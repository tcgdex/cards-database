import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Dusclops",
		fr: "Téraclope"
	},

	illustrator: "Kazuma Koda",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [356],
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		en: "Duskull",
		fr: "Skelénox"
	},

	description: {
		en: "It seeks drifting will-o'-the-wisps and sucks them\ninto its empty body. What happens inside is\na mystery.",
		fr: "Il cherche des feux follets pour les avaler.\\nCe qu'il se passe alors à l'intérieur\\nde son corps vide est un mystère."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Will-O-Wisp",
			fr: "Feu Follet"
		},

		damage: 30,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-blaziken"]
}

export default card