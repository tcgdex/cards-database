import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Dhelmise",
		fr: "Sinistrail",
		es: "Dhelmise",
		'es-mx': "Dhelmise",
		de: "Moruda"
	},

	illustrator: "Oku",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [781],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Vengeful Anchor"
		},

		cost: ["Psychic"],

		damage: "30+",

		effect: {
			en: "If you have 4 or more Pokémon that have the Hide 'n' Sneak Ability in your discard pile, this attack does 140 more damage."
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
				cardmarket: 895825,
				tcgplayer: 704796
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895825,
				tcgplayer: 704796
			}
		},
	],
}

export default card
