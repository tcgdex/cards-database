import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Zeraora",
	},

	illustrator: "HACCAN",
	rarity: "Promo",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],
	stage: "Basic",
	dexId: [807],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Rapid Draw",
		},

		effect: {
			en: "Draw a card.",
		},

		damage: 20
	},
	{
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Electrobullet",
		},

		effect: {
			en: "This attack also does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},

		damage: 50
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
				cardmarket: 895614,
				tcgplayer: 713285
			}
		}
	],
}

export default card
