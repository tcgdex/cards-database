import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Angoliath"
	},

	illustrator: "Kouki Saitou",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	evolveFrom: {
		fr: "Fourbelin"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Serment Obscur"
		},

		effect: {
			fr: "Tant que ce Pokémon est sur le Poste Actif, les attaques du Pokémon Actif de votre adversaire coûtent Colorless de plus."
		}
	}],

	attacks: [{
		name: {
			fr: "Pression Énergétique"
		},

		effect: {
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire."
		},

		damage: "100+",
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card