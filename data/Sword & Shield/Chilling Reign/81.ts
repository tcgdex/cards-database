import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Gallade",
		fr: "Gallame"
	},

	illustrator: "NC Empire",
	rarity: "Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Fighting"],

	evolveFrom: {
		en: "Kirlia",
		fr: "Kirlia"
	},

	attacks: [{
		name: {
			en: "Feint",
			fr: "Ruse"
		},

		effect: {
			en: "This attack’s damage isn’t affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance."
		},

		damage: 60,
		cost: ["Psychic"]
	}, {
		name: {
			en: "Dynablade",
			fr: "Dynalame"
		},

		effect: {
			en: "This attack does 60 damage for each of your opponent’s Pokémon V in play.",
			fr: "Cette attaque inflige 60 dégâts pour chacun des Pokémon-V en jeu de votre adversaire."
		},

		damage: "60×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card