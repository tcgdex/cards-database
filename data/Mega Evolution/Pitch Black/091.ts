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

	illustrator: "Nakamura Ippan",
	rarity: "Illustration rare",
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
			en: "If you have 4 or more Pokémon with the Hide 'n' Sneak Ability in your discard pile, this attack does 140 more damage."
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
			type: "holo",
			thirdParty: {
				cardmarket: 895875,
				tcgplayer: 704848
			}
		},
	],
}

export default card
