import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Weepinbell",
		fr: "Boustiflor"
	},

	illustrator: "Shibuzoh.",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Bellsprout",
		fr: "Chétiflor"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Dangerous Mucus",
			fr: "Mucus Dangereux"
		},

		effect: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may make your opponent’s Active Pokémon Burned and Poisoned.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez laisser le Pokémon Actif de votre adversaire Brûlé et Empoisonné."
		}
	}],

	attacks: [{
		name: {
			en: "Vine Whip",
			fr: "Fouet Lianes"
		},

		damage: 40,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card