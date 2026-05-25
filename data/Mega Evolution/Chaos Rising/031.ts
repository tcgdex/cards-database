import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886423,
				tcgplayer: 693474
			}
		},
	],

	name: {
		en: "Deoxys"
	},

	illustrator: "Shiburingaru",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [386],
	hp: 110,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Genome Charge"
		},

		cost: ["Colorless"],

		effect: {
			en: "Search your deck for up to 2 Basic Psychic Energy cards and attach them to this Pokémon. Then, shuffle your deck."
		}
	}, {
		name: {
			en: "Psychic"
		},

		cost: ["Psychic", "Psychic", "Colorless"],
		damage: 80,

		effect: {
			en: "This attack does 20 more damage for each Energy attached to your opponent's Active Pokémon."
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
}

export default card