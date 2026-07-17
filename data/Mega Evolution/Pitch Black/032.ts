import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "Its strange cries sound like human language. There are some musicians who compose songs for Jynx to sing."
	},

	name: {
		en: "Jynx",
		fr: "Lippoutou",
		es: "Jynx",
		'es-mx': "Jynx",
		de: "Rossana"
	},

	illustrator: "Yoshimoto Yoshimon",
	rarity: "Common",
	category: "Pokemon",
	dexId: [124],
	hp: 100,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Intense Kiss"
		},

		cost: ["Psychic"],

		effect: {
			en: "At the end of your opponent's next turn, discard the Defending Pokémon and all cards attached to it."
		}
	}, {
		name: {
			en: "Psy Bolt"
		},

		cost: ["Psychic", "Colorless"],

		damage: 50,

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralzed"
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
				cardmarket: 895819,
				tcgplayer: 704789
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895819,
				tcgplayer: 704789
			}
		},
	],
}

export default card
