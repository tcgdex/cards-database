import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Chinchidou",
		en: "Minccino"
	},

	illustrator: "MAHOU",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	attacks: [{
		name: {
			fr: "Coup d’Œil",
			en: "Glance"
		},

		effect: {
			fr: "Regardez la carte du dessus du deck de votre adversaire.",
			en: "Look at the top card of your opponent’s deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Plumo-Queue",
			en: "Tail Slap"
		},

		effect: {
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
			en: "Flip 2 coins. This attack does 20 damage for each heads."
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