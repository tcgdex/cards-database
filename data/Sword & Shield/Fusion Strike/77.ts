import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [771],
	set: Set,

	name: {
		en: "Pyukumuku",
		fr: "Concombaffe",
		es: "Pyukumuku",
		it: "Pyukumuku",
		pt: "Pyukumuku",
		de: "Gufa"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Basic",
	retreat: 1,
	regulationMark: "E",
	illustrator: "Tomokazu Komiya",

	description: {
		en: "It's covered in a slime that keeps its skin moist, allowing it to stay on land for days without drying up."
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Pitch a Pyukumuku"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in your hand, you may reveal it and put it on the bottom of your deck. If you do, draw a card. You can't use more than 1 Pitch a Pyukumuku Ability each turn."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Knuckle Punch"
		},

		damage: 50
	}],

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card