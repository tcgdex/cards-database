import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	set: Set,

	name: {
		fr: "Ixon de Galar"
	},

	illustrator: "aky CG Works",
	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Darkness"],

	evolveFrom: {
		fr: "Linéon de Galar"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Cri Sauvage"
		},

		effect: {
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez placer 3 marqueurs de dégâts sur l’un des Pokémon de votre adversaire."
		}
	}],

	attacks: [{
		name: {
			fr: "Blocage"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon de base."
		},

		damage: 90,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card