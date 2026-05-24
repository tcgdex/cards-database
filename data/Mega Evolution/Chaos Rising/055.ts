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
		en: "Krookodile ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [553],
	hp: 320,
	types: ["Darkness"],

	evolveFrom: {
		en: "Krokorok"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Corner"
		},

		cost: ["Darkness", "Colorless"],
		damage: 80,

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat."
		}
	}, {
		name: {
			en: "Strong Bite"
		},

		cost: ["Darkness", "Darkness", "Colorless"],
		damage: 140,

		effect: {
			en: "If this Pokémon has a Pokémon Tool attached, this attack does 140 more damage."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 693504,
		cardmarket: 886447
	}
}

export default card