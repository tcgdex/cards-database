import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Marshadow",
		fr: "Marshadow",
		es: "Marshadow",
		'es-mx': "Marshadow",
		de: "Marshadow"
	},

	illustrator: "Nakamura Ippan",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [802],
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Shadowy Knot"
		},

		cost: ["Psychic"],

		damage: "30x",

		effect: {
			en: "This attack does 30 damage for each Energy in your opponent's Active Pokémon's Retreat Cost."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895826,
				tcgplayer: 704797
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895826,
				tcgplayer: 704797
			}
		},
	],
}

export default card
