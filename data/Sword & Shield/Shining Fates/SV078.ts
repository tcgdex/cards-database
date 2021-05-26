import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Zigzaton de Galar"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Caprice Coup de Tête"
		},

		effect: {
			fr: "Lorsque vous jouez ce Pokémon de votre main pour sur votre Banc pendant votre tour, vous pouvez placer un marqueur de dégâts sur l’un des Pokémon de votre adversaire."
		}
	}],

	attacks: [{
		name: {
			fr: "Attaque Surprise"
		},

		effect: {
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien."
		},

		damage: 30,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1
}

export default card