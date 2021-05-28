import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Canarticho de Galar",
		en: "Galarian Farfetch’d"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	attacks: [{
		name: {
			fr: "Éclate-Roc",
			en: "Rock Smash"
		},

		effect: {
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
			en: "Flip a coin. If heads, this attack does 30 more damage."
		},

		damage: "10+",
		cost: ["Fighting"]
	}, {
		name: {
			fr: "Transpercement",
			en: "Pierce"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1
}

export default card