import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Mewtwo"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [150],
	hp: 130,
	types: ["Psychic"],
	stage: "Basic",

	description: {
		en: "Created from the DNA of Mew, this Pokémon is a dangerous combination of overwhelming power and a savage heart."
	},

	attacks: [{
		name: {
			en: "Empower"
		},

		cost: ["Psychic"],

		effect: {
			en: "Attach up to 2 Basic Energy cards from your discard pile to 1 of your Pokémon."
		}
	}, {
		name: {
			en: "Psydrive"
		},

		cost: ["Psychic", "Psychic", "Colorless"],

		damage: 120,

		effect: {
			en: "Discard an Energy from this Pokémon."
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

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907670,
				tcgplayer: 716462
			}
		}
	],
}

export default card
