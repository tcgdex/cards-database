import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Leafeon",
		'fr-fr': "Phyllali"
	},

	illustrator: "chibi",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [470],
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Eevee"
	},

	description: {
		'en-us': "When you see Leafeon asleep in a patch of\nsunshine, you'll know it is using photosynthesis\nto produce clean air.",
		'fr-fr': "Un Phyllali qui dort par beau temps produit un air frais et pur par photosynthèse."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Leaf Blast",
			'fr-fr': "Explosion de Feuilles"
		},

		damage: 10,
		cost: ["Colorless"],

		effect: {
			'en-us': "This attack does 20 more damage for each {G} Energy attached to this Pokémon.",
			'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie {G} attachée à ce Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card
