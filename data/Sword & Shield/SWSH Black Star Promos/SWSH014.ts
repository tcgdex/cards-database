import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Rillaboom V",
		fr: "Gorythmic V"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	hp: 220,
	types: ["Grass"],

	attacks: [{
		name: {
			en: "Forest Feast",
			fr: "Festin Forestier"
		},

		effect: {
			en: "Search your deck for up to 2 Basic Grass Pokémon and put them onto your Bench. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu’à 2 Pokémon Grass de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck."
		},

		cost: ["Grass"]
	}, {
		name: {
			en: "Wood Hammer",
			fr: "Martobois"
		},

		effect: {
			en: "This Pokémon also does 30 damage to itself.",
			fr: "Ce Pokémon s’inflige aussi 30 dégâts."
		},

		damage: 220,
		cost: ["Grass", "Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3
}

export default card