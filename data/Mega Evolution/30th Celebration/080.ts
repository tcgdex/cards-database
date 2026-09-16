import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Lunala"
	},

	illustrator: "Bun Toujo",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [792],
	hp: 160,
	types: ["Psychic"],
	stage: "Stage2",

	description: {
		en: "Known as the Beast That Calls the Moon, this Pokémon lives by taking in any and all light and converting it into its own energy."
	},

	attacks: [{
		name: {
			en: "Midnight Ray"
		},

		cost: ["Psychic"],

		damage: "20+",

		effect: {
			en: "This attack does 20 more damage for each Energy card in your discard pile."
		}
	}, {
		name: {
			en: "Lunar Blast"
		},

		cost: ["Psychic", "Colorless", "Colorless"],

		damage: 120,
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907687,
				tcgplayer: 716476
			}
		}
	],
}

export default card
