import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

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

	thirdParty: {
		tcgplayer: 693457,
		cardmarket: 886404
	}
}

export default card