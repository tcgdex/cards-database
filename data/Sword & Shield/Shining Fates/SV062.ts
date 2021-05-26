import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Lanssorien"
	},

	illustrator: "Naoki Saito",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],

	evolveFrom: {
		fr: "Dispareptil"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Infiltration"
		},

		effect: {
			fr: "Si des dégâts sont infligés à ce Pokémon par des attaques, lancez une pièce. Si c’est face, évitez ces dégâts."
		}
	}],

	attacks: [{
		name: {
			fr: "Hantise"
		},

		effect: {
			fr: "Placez 3 marqueurs de dégâts sur les Pokémon de Banc de votre adversaire comme il vous plaît."
		},

		damage: 120,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}]
}

export default card