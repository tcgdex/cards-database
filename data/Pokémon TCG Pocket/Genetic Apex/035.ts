import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Charizard"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],
	stage: "Stage2",

	attacks: [{
		cost: ["Fire", "Fire", "Colorless", "Colorless"],

		name: {
			en: "Fire Spin"
		},

		effect: {
			en: "Discard 2 R Energy from this Pokémon."
		},

		damage: "150"
	}],

	retreat: 2,
	rarity: "Three Diamond",

	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
		es: "Charmeleon",
		it: "Charmeleon",
		pt: "Charmeleon",
		de: "Glutexo"
	}
}

export default card
