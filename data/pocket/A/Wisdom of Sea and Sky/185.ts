import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Blissey",
		'fr-fr': "Leuphorie"
	},

	illustrator: "Natsumi Yoshida",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [242],
	hp: 150,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Chansey"
	},

	description: {
		'en-us': "Anyone who takes even one taste of Blissey's\negg becomes unfailingly caring and pleasant\nto everyone.",
		'fr-fr': "Il suffit de manger une bouchée de l'œuf de Leuphorie pour devenir aimable avec tout le monde."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Energy Blow",
			'fr-fr': "Coup d'Énergie"
		},

		damage: 20,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "This attack does 20 more damage for each Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie attachée à ce Pokémon."
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