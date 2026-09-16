import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Toxtricity"
	},

	illustrator: "Yuriko Akase",
	rarity: "Common",
	category: "Pokemon",
	dexId: [849],
	hp: 140,
	types: ["Lightning"],
	stage: "Stage1",

	description: {
		en: "The jolts of electricity it launches by violently strumming the protrusions on its chest easily exceed 15,000 volts."
	},

	attacks: [{
		name: {
			en: "Light Punch"
		},

		cost: ["Lightning"],

		damage: 40,
	}, {
		name: {
			en: "Thunderous Bolt"
		},

		cost: ["Lightning", "Colorless", "Colorless"],

		damage: 150,

		effect: {
			en: "During your next turn, this Pokémon can't use attacks."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907667,
				tcgplayer: 716459
			}
		}
	],
}

export default card
