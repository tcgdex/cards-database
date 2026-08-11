import { Card } from "models/database/card"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Whitney",
		'fr-fr': "Blanche"
	},

	illustrator: "Yuu Nishida",
	rarity: "Two Diamond",
	category: "Trainer",

	effect: {
		'en-us': "Heal 60 damage from 1 of your Miltank, and it recovers from being Asleep, Paralyzed, and Confused.",
		'fr-fr': "Soignez 60 dégâts d'un de vos , et il guérit des États Spéciaux Endormi, Paralysé et Confus."
	},

	trainerType: "Supporter"
}

export default card