import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu ex",
	},

	suffix: "ex",
	illustrator: "YOSHIROTTEN",
	rarity: "Promo",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",
	dexId: [25],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Pika-Pika Parade",
		},

		effect: {
			en: "Search your deck for any number of Basic Pokémon and put them onto your Bench. Then, shuffle your deck.",
		}
	},
	{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Thunderbolt",
		},

		effect: {
			en: "Discard all Energy from this Pokémon.",
		},

		damage: 200
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Fighting",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895615,
				tcgplayer: 713257
			}
		}
	],
}

export default card
