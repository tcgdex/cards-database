import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Nostenfer V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Darkness"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Atout Obscur"
		},

		effect: {
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez piocher des cartes jusqu’à en avoir 6 en main. Vous ne pouvez utiliser qu’un talent Atout Obscur par tour."
		}
	}],

	attacks: [{
		name: {
			fr: "Croc-Poison"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné."
		},

		damage: 70,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card