import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		fr: "Celebi V",
		en: "Celebi V"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],

	attacks: [{
		name: {
			fr: "Foliole Dansante",
			en: "Leaflet Dance"
		},

		effect: {
			fr: "Attachez le nombre de cartes Énergie Grass voulues de votre main à vos Pokémon comme il vous plaît.",
			en: "Attach any number of Grass Energy cards from your hand to your Pokémon in any way you like."
		},

		cost: ["Grass"]
	}, {
		name: {
			fr: "Retour de Frappe",
			en: "Slash Back"
		},

		effect: {
			fr: "Échangez ce Pokémon contre l’un de vos Pokémon de Banc.",
			en: "Switch this Pokémon with 1 of your Benched Pokémon."
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