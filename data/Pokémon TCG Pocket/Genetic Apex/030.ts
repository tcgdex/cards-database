import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Lilligant",
		fr: "Fragilady"
	},

	illustrator: "You Iribi",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	stage: "Stage1",
	evolveFrom: {
		en: "Petilil",
		fr: "Chlorobule"
	},


	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			en: "Leaf Supply",
			fr: "Provision de Feuillage"
		},

		effect: {
			en: "Take a G Energy from your Energy Zone and attach it to 1 of your Benched G Pokémon.",
			fr: "Prenez une Énergie G de votre zone Énergie et attachez-la à l'un de vos Pokémon G de Banc."
		},

		damage: "50"
	}],


	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "The fragrance of the garland on its head has a relaxing effect, but taking care of it is very difficult.",
		fr: "La fleur sur sa tête émet un parfum qui apaise instantanément, mais elle est très difficile à entretenir."
	}
}

export default card
