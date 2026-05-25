import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886429,
				tcgplayer: 693521
			}
		},
	],

	name: {
		en: "Meowstic"
	},

	illustrator: "mingo",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [678],
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		en: "Espurr"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Tricky Steps"
		},

		cost: ["Psychic", "Colorless"],
		damage: 80,

		effect: {
			en: "You may move an Energy from your opponent's Active Pokémon to 1 of their Benched Pokémon."
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

	retreat: 1,
	regulationMark: "J",
}

export default card