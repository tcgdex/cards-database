import { Card } from "../../../interfaces"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [939],
	set: Set,

	name: {
		en: "Bellibolt",
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	evolveFrom: {
		en: "Tadbulb",
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Thunder Wave",
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
		}
	}, {
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Two-Bump Bolt",
		},

		effect: {
			en: "You may discard up to 2 {L} Energy from this Pokémon. This attack does 80 more damage for each card you discarded in this way.",
		},

		damage: "10+"
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",
	illustrator: "Mizue",
	description: {
		en: "When this Pokémon expands and contracts its wobbly body, the belly-button dynamo in its stomach produces a huge amount of electricity.",
	},
	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 751815,
				tcgplayer: 544194
			},
		}
	],
}

export default card
