import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Fuecoco",
		fr: "Chochodile"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Basic",
	dexId: [909],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			en: "Flamethrower",
			fr: "Lance-Flammes"
		},

		damage: 70,

		effect: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
