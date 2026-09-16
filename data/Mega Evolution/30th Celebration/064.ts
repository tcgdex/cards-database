import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Mewtwo"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [150],
	hp: 230,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Photon Bullets"
		},

		cost: ["Psychic", "Psychic"],

		effect: {
			en: "This attack does 50 damage to each of your opponent's Pokémon ex. (Don't apply Weakness and Resistance for Benched Pokémon.)"
		}
	}, {
		name: {
			en: "Psychic Powers"
		},

		cost: ["Psychic", "Psychic", "Psychic"],

		damage: 230,

		effect: {
			en: "During your next turn, this Pokémon can't use attacks."
		}
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
			type: "holo",
			thirdParty: {
				cardmarket: 907671,
				tcgplayer: 716463
			}
		}
	],
}

export default card
