import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Tsareena",
		fr: "Sucreine"
	},

	illustrator: "Naoki Saito",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	evolveFrom: {
		en: "Steenee"
	},

	description: {
		en: "This Pokémon is proud and aggressive. However, it is\nsaid that a Tsareena will instantly become calm if\nsomeone touches the crown on its calyx.",
		fr: "Ce Pokémon est aussi fier qu'agressif. On dit néanmoins qu'il se calme instantanément quand on touche la couronne sur sa tête."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Kick Down",
			fr: "Coup Séparateur"
		},

		damage: 50,
		cost: ["Grass"],

		effect: {
			en: "Your opponent reveals a random card from their hand and shuffles it into their deck.",
			fr: "Votre adversaire montre une carte de sa main au hasard, puis la mélange avec son deck."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card