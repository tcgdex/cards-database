import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Métamorph VMAX",
		en: "Ditto VMAX"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Colorless"],

	evolveFrom: {
		fr: "Métamorph-V",
		en: "Ditto V"
	},

	attacks: [{
		name: {
			fr: "Morphomax",
			en: "Max Transform"
		},

		effect: {
			fr: "Choisissez l’une des attaques du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque.",
			en: "Choose 1 of your opponent’s Active Pokémon’s attacks and use it as this attack."
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card