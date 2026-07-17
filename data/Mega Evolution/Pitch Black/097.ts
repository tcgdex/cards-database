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
	rarity: "Ultra Rare",
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
			en: "Surf",
			de: "Surfer"
		},

		cost: ["Water", "Water", "Water"],

		damage: 120
	}, {
		name: {
			en: "Falling Down",
			de: "Hinfallen"
		},

		cost: ["Water", "Water", "Water", "Water", "Water"],

		damage: 270,

		effect: {
			en: "This Pokémon is now Asleep",
			de: "Dieses Pokémon schläft jetzt."
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
				cardmarket: 895882,
				tcgplayer: 704854
			}
		},
	],
}

export default card
