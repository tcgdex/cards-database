import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Landorus",
		fr: "Démétéros",
		es: "Landorus",
		it: "Landorus",
		pt: "Landorus",
		de: "Demeteros"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "NC Empire",

	description: {
		en: "From the forces of lightning and wind, it creates energy to give nutrients to the soil and make the land abundant."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Strafe"
		},

		damage: 20,

		effect: {
			en: "You may switch this Pokémon with 1 of your Benched Pokémon."
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Earthen Boom"
		},

		damage: 120,

		effect: {
			en: "Move all Energy from this Pokémon to your Benched Pokémon in any way you like."
		}
	}],

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	}
}

export default card