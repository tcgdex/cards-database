import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "This seems to be the Winged King mentioned in an old expedition journal. It was said to have split the land with its bare fists."
	},

	name: {
		en: "Koraidon",
		fr: "Koraidon",
		es: "Koraidon",
		'es-mx': "Koraidon",
		de: "Koraidon"
	},

	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [1007],
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Battle Claw"
		},

		cost: ["Fighting"],

		damage: "30+",

		effect: {
			en: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 30 more damage"
		}
	}, {
		name: {
			en: "Gaia Impact"
		},

		cost: ["Fighting", "Fighting", "Colorless"],

		damage: 190,

		effect: {
			en: "Discard all Energy attached to this Pokémon"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895833,
				tcgplayer: 704804
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895833,
				tcgplayer: 704804
			}
		},
	],
}

export default card
