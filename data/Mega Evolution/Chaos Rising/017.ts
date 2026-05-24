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
		en: "Octillery"
	},

	illustrator: "matazo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [224],
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		en: "Remoraid"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Ink Jet"
		},

		cost: ["Water"],
		damage: 30,

		effect: {
			en: "During your opponent's next turn, if the Defending Pokémon tries to use an attack, your opponent flips 2 coins. If either of them is tails, that attack doesn't happen."
		}
	}, {
		name: {
			en: "Tantrum"
		},

		cost: ["Water", "Colorless"],
		damage: 120,

		effect: {
			en: "This Pokémon is now Confused."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693528,
		cardmarket: 886409
	}
}

export default card