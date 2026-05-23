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
		en: "Metagross"
	},

	illustrator: "Bun Toujo",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [376],
	hp: 180,
	types: ["Metal"],

	evolveFrom: {
		en: "Metang"
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Bounce Back"
		},

		cost: ["Metal"],
		damage: 60,

		effect: {
			en: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon."
		}
	}, {
		name: {
			en: "Metallic Hammer"
		},

		cost: ["Metal", "Metal", "Metal", "Colorless"],
		damage: 150,

		effect: {
			en: "You may discard 3 [M] Energy from this Pokémon. If you do, this attack does 150 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 693522
	}
}

export default card