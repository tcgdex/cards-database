import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Pomdrapi"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		fr: "Verpom"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Chute de Pommes"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez placer 2 marqueurs de dégâts sur l’un des Pokémon de votre adversaire. Si vous avez placé des marqueurs de dégâts de cette façon, mélangez dans votre deck ce Pokémon et toutes les cartes attachées."
		}
	}],

	attacks: [{
		name: {
			fr: "Bombe Acide"
		},

		effect: {
			fr: "Lancez une pièce. Si c’est face, défaussez une Énergie du Pokémon Actif de votre adversaire."
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card