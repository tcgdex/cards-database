import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Rongrigou V"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Rare",
	category: "Pokemon",
	hp: 200,
	types: ["Colorless"],

	attacks: [{
		name: {
			fr: "Mâchouille"
		},

		effect: {
			fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire."
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			fr: "Écrasement Chancelant"
		},

		effect: {
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien."
		},

		damage: 180,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card