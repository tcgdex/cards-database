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
		en: "Mega Pyroar ex"
	},

	illustrator: "Keisuke Azuma",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [668],
	hp: 340,
	types: ["Fire"],

	evolveFrom: {
		en: "Litleo"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Ferocious Bellow"
		},

		cost: ["Fire", "Colorless"],
		damage: 80,

		effect: {
			en: "During your opponent's next turn, attacks used by the Defending Pokémon do 50 less damage (before applying Weakness and Resistance)."
		}
	}, {
		name: {
			en: "Big Bang Fire"
		},

		cost: ["Fire", "Fire", "Colorless"],
		damage: 290,

		effect: {
			en: "This attack does 10 less damage for each damage counter on this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693519,
		cardmarket: 886407
	}
}

export default card