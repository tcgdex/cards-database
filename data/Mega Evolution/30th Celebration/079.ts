import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Cosmoem"
	},

	illustrator: "Masako Tomii",
	rarity: "Common",
	category: "Pokemon",
	dexId: [790],
	hp: 100,
	types: ["Psychic"],
	stage: "Stage1",

	description: {
		en: "The absorption of starlight fuels this Pokémon's growth. The shell that encases it is harder than any known material."
	},

	attacks: [{
		name: {
			en: "Stiffen"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			en: "During your opponent's next turn, this Pokémon takes 60 less damage from attacks (after applying Weakness and Resistance)."
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

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907686,
				tcgplayer: 716475
			}
		}
	],
}

export default card
