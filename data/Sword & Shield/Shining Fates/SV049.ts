import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Corayon de Galar"
	},

	illustrator: "Mizue",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],

	attacks: [{
		name: {
			fr: "Chute Maudite"
		},

		effect: {
			fr: "Placez 3 marqueurs de dégâts sur les Pokémon de votre adversaire comme il vous plaît."
		},

		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2
}

export default card