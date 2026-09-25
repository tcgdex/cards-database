import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Zeraora ex",
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	hp: 270,
	types: ["Lightning"],
	stage: "Basic",
	dexId: [807],

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Thunderous Fist",
		},

		effect: {
			en: "This attack does 60 damage for each {L} Energy attached to this Pokémon.",
		},

		damage: "60×"
	},
	{
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			en: "Zepto Turn",
		},

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
		},

		damage: 150
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
				cardmarket: 903672,
				tcgplayer: 710754
			}
		}
	],
}

export default card
