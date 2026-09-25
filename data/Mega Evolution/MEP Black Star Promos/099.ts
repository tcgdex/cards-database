import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Greninja ex",
	},

	suffix: "ex",
	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	hp: 300,
	types: ["Water"],
	stage: "Stage2",
	dexId: [658],

	evolveFrom: {
		en: "Frogadier",
	},

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Stealthy Slash",
		},

		effect: {
			en: "This attack does 30 damage to 1 of your opponent's Pokémon for each damage counter on that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		}
	},
	{
		cost: ["Water", "Water"],

		name: {
			en: "Aqua Edge",
		},

		damage: 160
	}],

	retreat: 1,
	regulationMark: "J",

	weaknesses: [{
		type: "Lightning",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895611,
				tcgplayer: 713268
			}
		},
		{
			type: "holo",
			size: "jumbo",
			thirdParty: {
				cardmarket: 910855,
				tcgplayer: 713269
			}
		}
	],
}

export default card
