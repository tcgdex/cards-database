import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Charizard ex",
		fr: "Dracaufeu ex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 180,
	types: ["Fire"],
	stage: "Stage2",
	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel"
	},

	suffix: "EX",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Slash",
			fr: "Tranche"
		},

		damage: "60"
	}, {
		cost: ["Fire", "Fire", "Colorless", "Colorless"],

		name: {
			en: "Crimson Storm",
			fr: "Tempête Écarlate"
		},

		effect: {
			en: "Discard 2 R Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies R de ce Pokémon."
		},

		damage: "200"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Four Diamond"
}

export default card
