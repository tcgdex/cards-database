import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Darkrai ex",
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	hp: 280,
	types: ["Darkness"],
	stage: "Basic",
	dexId: [491],

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			en: "Dusk Raid",
		},

		effect: {
			en: "If your Benched Pokémon have any damage counters on them, this attack does 110 more damage.",
		},

		damage: "110+"
	},
	{
		cost: ["Darkness", "Darkness", "Darkness"],

		name: {
			en: "Abyss Eye",
		},

		effect: {
			en: "If your opponent's Active Pokémon is affected by a Special Condition, it is Knocked Out.",
		}
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
				cardmarket: 903676,
				tcgplayer: 710756
			}
		}
	],
}

export default card
