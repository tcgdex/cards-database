import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Azumarill"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [184],
	hp: 130,
	types: ["Psychic"],
	stage: "Stage1",

	description: {
		en: "By keeping still and listening intently, it can tell what is in even wild, fast-moving rivers."
	},

	attacks: [{
		name: {
			en: "Body Slam"
		},

		cost: ["Psychic", "Psychic", "Colorless"],

		damage: 90,

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907675,
				tcgplayer: 716467
			}
		}
	],
}

export default card
