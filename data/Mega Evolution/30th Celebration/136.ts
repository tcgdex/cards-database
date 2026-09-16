import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Drifloon"
	},

	illustrator: "Whisker",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [425],
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	description: {
		en: "Because of the way it floats aimlessly, an old folktale calls it a “signpost for wandering spirits.”"
	},

	attacks: [{
		name: {
			en: "Float Up"
		},

		cost: ["Psychic"],

		damage: 20,

		effect: {
			en: "You may shuffle this Pokémon and all attached cards into your deck."
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
				cardmarket: 907744,
				tcgplayer: 696684
			}
		}
	],
}

export default card
