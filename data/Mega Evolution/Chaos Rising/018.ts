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
		en: "Delibird"
	},

	illustrator: "Saboteri",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [225],
	hp: 90,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Happy Present"
		},

		cost: ["Colorless"],

		effect: {
			en: "Each player may attach up to 3 Basic Energy cards from their hand to their Pokémon in any way they like. (Your opponent does this first.)"
		}
	}, {
		name: {
			en: "Flap"
		},

		cost: ["Colorless", "Colorless"],
		damage: 40
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693472,
		cardmarket: 886410
	}
}

export default card