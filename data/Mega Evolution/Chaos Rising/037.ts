import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

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

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 693521
			}
		}
	],
}

export default card