import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Slurpuff",
		fr: "Cupcanaille"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		en: "Swirlix",
		fr: "Sucroquin"
	},

	attacks: [{
		name: {
			en: "Follow the Scent",
			fr: "Chasse aux Senteurs"
		},

		effect: {
			en: "Flip 3 coins. Put a number of cards up to the number of heads from your discard pile into your hand.",
			fr: "Lancez 3 pièces. Ajoutez à votre main un nombre de cartes de votre pile de défausse inférieur ou égal au nombre de côtés face obtenus."
		},

		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Fairy Wind",
			fr: "Vent Féérique"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card