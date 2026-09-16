import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Koraidon"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [1007],
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",

	description: {
		en: "This seems to be the Winged King mentioned in an old expedition journal. It was said to have split the land with its bare fists."
	},

	attacks: [{
		name: {
			en: "Low Kick"
		},

		cost: ["Fighting", "Fighting"],

		damage: 50,
	}, {
		name: {
			en: "Collision Course"
		},

		cost: ["Fighting", "Fighting", "Colorless"],

		damage: 140,

		effect: {
			en: "Discard 2 Fighting Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907693,
				tcgplayer: 716482
			}
		}
	],
}

export default card
