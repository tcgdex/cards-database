import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Butterfree"
	},

	illustrator: "miki kudo",
	rarity: "Three Diamond",
	category: "Pokemon",
	types: ["Grass"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Powder Heal"
		},

		effect: {
			en: "Once during your turn, you may heal 20 damage from each of your Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Gust"
		},

		cost: ["Grass", "Colorless", "Colorless"],
		damage: 60
	}],

	evolveFrom: {
		en: "Metapod",
		fr: "Chrysacier",
		es: "Metapod",
		it: "Metapod",
		pt: "Metapod",
		de: "Safcon"
	}
}

export default card