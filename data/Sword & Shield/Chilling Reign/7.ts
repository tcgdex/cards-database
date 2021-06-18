import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Celebi V",
		fr: "Celebi V"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],

	attacks: [{
		name: {
			en: "Leaflet Dance",
			fr: "Foliole Dansante"
		},

		effect: {
			en: "Attach any number of Grass Energy cards from your hand to your Pokémon in any way you like.",
			fr: "Attachez le nombre de cartes Énergie Grass voulues de votre main à vos Pokémon comme il vous plaît."
		},

		cost: ["Grass"]
	}, {
		name: {
			en: "Slash Back",
			fr: "Retour de Frappe"
		},

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon contre l’un de vos Pokémon de Banc."
		},

		damage: 60,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card