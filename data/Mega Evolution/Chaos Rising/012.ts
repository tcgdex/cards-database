import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Braixen"
	},

	illustrator: "Taiga Kasai",
	rarity: "Common",
	category: "Pokemon",
	dexId: [654],
	hp: 100,
	types: ["Fire"],

	evolveFrom: {
		en: "Fennekin"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Flamethrower"
		},

		cost: ["Fire", "Fire"],
		damage: 80,

		effect: {
			en: "Discard an Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 693457
			}
		}
	],
}

export default card