import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Umbreon ex",
	},

	suffix: "ex",
	illustrator: "REND",
	rarity: "Promo",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],
	stage: "Stage1",
	dexId: [197],

	evolveFrom: {
		en: "Eevee",
	},

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Lunatic Claw",
		},

		effect: {
			en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 140 more damage.",
		},

		damage: "100+"
	}],

	retreat: 2,
	regulationMark: "J",

	weaknesses: [{
		type: "Grass",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895618,
				tcgplayer: 713259
			}
		}
	],
}

export default card
