import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Unown"
	},

	illustrator: "mingo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [201],
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",

	description: {
		en: "Its flat, thin body is always stuck on walls. Its shape appears to have some meaning."
	},

	attacks: [{
		name: {
			en: "Mysterious Signal"
		},

		cost: ["Psychic", "Psychic"],

		damage: 40,

		effect: {
			en: "If your opponent's Pokémon is Knocked Out by damage from this attack, take 1 more Prize card."
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
				cardmarket: 907679,
				tcgplayer: 716468
			}
		}
	],
}

export default card
