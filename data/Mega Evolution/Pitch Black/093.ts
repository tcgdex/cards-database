import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "Bastiodon live in herds. When assaulted by enemies, they line up side by side and use their hard faces to block attacks."
	},

	name: {
		en: "Bastiodon",
		fr: "Bastiodon",
		es: "Bastiodon",
		'es-mx': "Bastiodon",
		de: "Bollterus"
	},

	illustrator: "Yoriyuki Ikegami",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [411],
	hp: 160,
	types: ["Metal"],

	evolveFrom: {
		en: "Shieldon"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Ancient Bulwark"
		},

		effect: {
			en: "While this Pokémon is on your Bench, prevent all damage done to your Pokémon by attacks from your opponent's Pokémon that have 2 or fewer Energy attached."
		}
	}],

	attacks: [{
		name: {
			en: "Hammer In"
		},

		cost: ["Metal", "Metal", "Colorless"],

		damage: 160
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],
	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 4,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895878,
				tcgplayer: 704850
			}
		},
	],
}

export default card
