import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Dunaconda"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	evolveFrom: {
		fr: "Dunaja"
	},

	attacks: [{
		name: {
			fr: "Enroulement"
		},

		effect: {
			fr: "Pendant votre prochain tour, les attaques de ce Pokémon infligent 120 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance)."
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			fr: "Coud’Krâne"
		},

		damage: 100,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card