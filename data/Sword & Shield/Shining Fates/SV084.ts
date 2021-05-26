import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Fourbelin"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		fr: "Grimalin"
	},

	attacks: [{
		name: {
			fr: "Morsure"
		},

		damage: 30,
		cost: ["Darkness"]
	}, {
		name: {
			fr: "Fourbette"
		},

		effect: {
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire."
		},

		damage: 60,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card