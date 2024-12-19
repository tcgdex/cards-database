import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Flareon"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Flamethrower"
		},

		effect: {
			en: "Discard 1 R Energy from this Pokémon."
		},

		damage: "110"
	}],

	retreat: 2,
	rarity: "Three Diamond",

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
		es: "Eevee",
		it: "Eevee",
		pt: "Eevee",
		de: "Evoli"
	}
}

export default card
