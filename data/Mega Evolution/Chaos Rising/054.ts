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
		en: "Skuntank"
	},

	illustrator: "Yuriko Akase",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [435],
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		en: "Stunky"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Rear Kick"
		},

		cost: ["Darkness"],
		damage: 40
	}, {
		name: {
			en: "Smash Turn"
		},

		cost: ["Darkness", "Darkness", "Colorless"],
		damage: 100,

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693544,
		cardmarket: 886446
	}
}

export default card