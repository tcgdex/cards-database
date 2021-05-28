import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Crobat",
		fr: "Nostenfer"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		en: "Golbat",
		fr: "Nosferalto"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Drastic Draw",
			fr: "Pioche Radicale"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may draw 3 cards.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez piocher 3 cartes."
		}
	}],

	attacks: [{
		name: {
			en: "Wing Attack",
			fr: "Cru-Ailes"
		},

		damage: 100,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	regulationMark: "E"
}

export default card