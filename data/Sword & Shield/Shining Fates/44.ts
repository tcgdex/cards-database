import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Nostenfer V",
		en: "Crobat V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Darkness"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Atout Obscur",
			en: "Dark Asset"
		},

		effect: {
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez piocher des cartes jusqu’à en avoir 6 en main. Vous ne pouvez utiliser qu’un talent Atout Obscur par tour.",
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may draw cards until you have 6 cards in your hand. You can’t use more than 1 Dark Asset Ability each turn."
		}
	}],

	attacks: [{
		name: {
			fr: "Croc-Poison",
			en: "Venomous Fang"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
			en: "Your opponent’s Active Pokémon is now Poisoned."
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