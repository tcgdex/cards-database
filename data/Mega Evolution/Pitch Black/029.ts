import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		en: "Slowpoke",
		fr: "Ramoloss",
		es: "Slowpoke",
		'es-mx': "Slowpoke",
		de: "Flegmon"
	},

	illustrator: "Nelnal",
	rarity: "Common",
	category: "Pokemon",
	dexId: [79],
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "All-You-Can-Yeet"
		},

		cost: ["Psychic"],

		effect: {
			en: "Discard any number of cards from your hand."
		}
	}, {
		name: {
			en: "Headbutt"
		},

		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895816,
				tcgplayer: 704786
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895816,
				tcgplayer: 704786
			}
		},
	],
}

export default card
