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
		en: "Ho-Oh"
	},

	illustrator: "Takumi Wada",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [250],
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Revival Flame"
		},

		cost: ["Fire"],

		effect: {
			en: "Put up to 3 Basic Pokémon from your discard pile onto your Bench."
		}
	}, {
		name: {
			en: "Bright Wing"
		},

		cost: ["Fire", "Fire", "Fire"],
		damage: 130,

		effect: {
			en: "Discard an Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693500,
		cardmarket: 886402
	}
}

export default card