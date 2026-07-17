import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Malamar",
		fr: "Sepiatroce",
		es: "Malamar",
		'es-mx': "Malamar",
		de: "Calamanero"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [687],
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		en: "Inkay"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Perplex"
		},

		cost: ["Darkness"],

		effect: {
			en: "Your opponent's Active Pokémon is now Confused"
		}
	}, {
		name: {
			en: "Brain Crush"
		},

		cost: ["Darkness"],

		damage: 130,

		effect: {
			en: "If your opponent's Active Pokémon is not Confused, this attack does nothing."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895837,
				tcgplayer: 704809
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895837,
				tcgplayer: 704809
			}
		},
	],
}

export default card
