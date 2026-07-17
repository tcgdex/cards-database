import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Spiritomb",
		fr: "Spiritomb",
		es: "Spiritomb",
		'es-mx': "Spiritomb",
		de: "Kryppuk"
	},

	illustrator: "danciao",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [442],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Spiritual End"
		},

		cost: ["Psychic"],

		effect: {
			en: "If you have 13 or more Pokémon that have the Hide 'n' Sneak Ability in your discard pile, choose 2 of your opponent's Pokémon and quadruple the number of damage counters on each of those Pokémon."
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
				cardmarket: 895822,
				tcgplayer: 704792
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895822,
				tcgplayer: 704792
			}
		},
	],
}

export default card
