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
		en: "Mega Dragalge ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [691],
	hp: 330,
	types: ["Dragon"],

	evolveFrom: {
		en: "Skrelp"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Corrosive Liquid"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Discard all Pokémon Tools and Special Energy from all of your opponent's Pokémon."
		}
	}, {
		name: {
			en: "Pernicious Poison"
		},

		cost: ["Water", "Darkness"],

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned. During Pokémon Checkup, place 16 damage counters on that Pokémon instead of 1."
		}
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693508,
		cardmarket: 886457
	}
}

export default card