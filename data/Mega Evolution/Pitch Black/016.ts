import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Wailord ex",
		fr: "Wailord-ex",
		es: "Wailord ex",
		'es-mx': "Wailord ex",
		de: "Wailord-ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [321],
	hp: 380,
	types: ["Water"],

	evolveFrom: {
		en: "Wailmer"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Surf"
		},

		cost: ["Water", "Water", "Water"],

		damage: 120
	}, {
		name: {
			en: "Falling Down"
		},

		cost: ["Water", "Water", "Water", "Water", "Water"],

		damage: 270,

		effect: {
			en: "This Pokémon is now Asleep"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895804,
				tcgplayer: 704773
			}
		},
	],
}

export default card
