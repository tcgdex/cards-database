import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Seaking",
		fr: "Poissoroy",
		es: "Seaking",
		'es-mx': "Seaking",
		de: "Golking"
	},

	illustrator: "OKUBO",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [119],
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		en: "Goldeen"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Hydro Jet"
		},

		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "This attack does 30 damage to 1 of your Benched Pokémon for each Water Energy attached to this Pokémon"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895802,
				tcgplayer: 704771
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895802,
				tcgplayer: 704771
			}
		},
	],
}

export default card
