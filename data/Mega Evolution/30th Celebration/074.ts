import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Cresselia"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Common",
	category: "Pokemon",
	dexId: [488],
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",

	description: {
		en: "Shiny particles are released from its wings like a veil. It is said to represent the crescent moon."
	},

	attacks: [{
		name: {
			en: "Aurora Gain"
		},

		cost: ["Psychic", "Colorless"],

		damage: 30,

		effect: {
			en: "Heal 30 damage from this Pokémon."
		}
	}, {
		name: {
			en: "Lunar Blast"
		},

		cost: ["Psychic", "Colorless", "Colorless"],

		damage: 100,
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907681,
				tcgplayer: 716470
			}
		}
	],
}

export default card
