import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Chinchidou"
	},

	illustrator: "MAHOU",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	attacks: [{
		name: {
			fr: "Coup d’Œil"
		},

		effect: {
			fr: "Regardez la carte du dessus du deck de votre adversaire."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Plumo-Queue"
		},

		effect: {
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face."
		},

		damage: "20×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card