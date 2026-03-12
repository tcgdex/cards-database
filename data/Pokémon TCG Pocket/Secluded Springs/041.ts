import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Dugtrio",
		fr: "Triopikeur"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [51],
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		en: "Diglett"
	},

	description: {
		en: "Its three heads bob separately up and down to\nloosen the soil nearby, making it easier for it\nto burrow.",
		fr: "Ses trois têtes pilonnent le sol pour le rendre friable et ainsi faciliter l'excavation."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Cliff Crumbler",
			fr: "Casse-Paroi"
		},

		damage: 40,
		cost: ["Fighting"],

		effect: {
			en: "Discard the top card of your deck. If that card is a {F} Pokémon, this attack does 60 more damage.",
			fr: "Défaussez la carte du dessus de votre deck. Si cette carte est un Pokémon {F}, cette attaque inflige 60 dégâts supplémentaires."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card