import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Single Strike Urshifu V",
		fr: "Shifours Poing Final V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],

	attacks: [{
		name: {
			en: "Laser Focus",
			fr: "Affilage"
		},

		effect: {
			en: "Search your deck for up to 2 Fighting Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck jusqu’à 2 cartes Énergie Fighting, puis attachez-les à ce Pokémon. Mélangez ensuite votre deck."
		},

		cost: ["Fighting"]
	}, {
		name: {
			en: "Impact Blow",
			fr: "Coup à Impact"
		},

		effect: {
			en: "During your next turn, this Pokémon can’t use Impact Blow.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup à Impact."
		},

		damage: 180,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2
}

export default card