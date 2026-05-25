import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886440,
				tcgplayer: 693514
			}
		},
	],

	name: {
		en: "Mega Gallade ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [475],
	hp: 350,
	types: ["Fighting"],

	evolveFrom: {
		en: "Kirlia"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Gale Slash"
		},

		cost: ["Fighting"],
		damage: 50,

		effect: {
			en: "If this Pokémon has no damage counters on it, this attack does 150 more damage."
		}
	}, {
		name: {
			en: "Marvelous Edge"
		},

		cost: ["Fighting", "Fighting", "Colorless"],
		damage: 240
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
}

export default card