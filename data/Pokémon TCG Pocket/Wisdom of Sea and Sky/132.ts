import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Blissey",
		fr: "Leuphorie"
	},

	illustrator: "Mizue",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],

	evolveFrom: {
		en: "Chansey"
	},

	description: {
		en: "Anyone who takes even one taste of Blissey's\negg becomes unfailingly caring and pleasant\nto everyone.",
		fr: "Il suffit de manger une bouchée de l'œuf de Leuphorie pour devenir aimable avec tout le monde."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Energy Blow",
			fr: "Coup d'Énergie"
		},

		damage: 20,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "This attack does 20 more damage for each Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée à ce Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 4,
	boosters: ["ho-oh"]
}

export default card