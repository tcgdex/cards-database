import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Blancoton",
		en: "Eldegoss"
	},

	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		fr: "Tournicoton",
		en: "Gossifleur"
	},

	attacks: [{
		name: {
			fr: "Graines Fortifiantes",
			en: "Enriching Seeds"
		},

		effect: {
			fr: "Soignez tous les dégâts de l’un de vos Pokémon de Banc.",
			en: "Heal all damage from 1 of your Benched Pokémon."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Attaque Surprise",
			en: "Surprise Attack"
		},

		effect: {
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
			en: "Flip a coin. If tails, this attack does nothing."
		},

		damage: 50,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card
