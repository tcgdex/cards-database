import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886433,
				tcgplayer: 693497
			}
		},
	],

	name: {
		en: "Gourgeist ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [711],
	hp: 270,
	types: ["Psychic"],

	evolveFrom: {
		en: "Pumpkaboo"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Horror Rondo"
		},

		cost: ["Psychic"],
		damage: 30,

		effect: {
			en: "This attack does 50 more damage for each of your Benched Pokémon that has any damage counters on it."
		}
	}, {
		name: {
			en: "Ghost Touch"
		},

		cost: ["Psychic", "Psychic"],
		damage: 140,

		effect: {
			en: "Discard a random card from your opponent's hand."
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
}

export default card