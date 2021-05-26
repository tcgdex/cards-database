import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Dratatin"
	},

	illustrator: "Kouki Saitou",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		fr: "Verpom"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Arôme Délicieux"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez lancer une pièce. Si c’est face, échangez l’un des Pokémon de Banc de base de votre adversaire contre son Pokémon Actif."
		}
	}],

	attacks: [{
		name: {
			fr: "Lance-Soleil"
		},

		damage: 70,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3
}

export default card