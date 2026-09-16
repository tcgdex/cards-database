import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Ferrothorn"
	},

	illustrator: "Po-Suzuki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [598],
	hp: 130,
	types: ["Metal"],
	stage: "Stage1",

	description: {
		en: "This Pokémon scrapes its spikes across rocks, and then uses the tips of its feelers to absorb the nutrients it finds within the stone."
	},

	attacks: [{
		name: {
			en: "Spike Sting"
		},

		cost: ["Colorless", "Colorless"],

		damage: 50,
	}, {
		name: {
			en: "Kaboom Needles"
		},

		cost: ["Metal", "Metal"],

		effect: {
			en: "This attack does 50 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) This Pokémon also does 130 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907711,
				tcgplayer: 716497
			}
		}
	],
}

export default card
