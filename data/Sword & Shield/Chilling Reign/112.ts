import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Metagross V",
		fr: "Métalosse V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],

	attacks: [{
		name: {
			en: "Bullet Punch",
			fr: "Pisto-Poing"
		},

		effect: {
			en: "Flip 2 coins. This attack does 20 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face."
		},

		damage: "20+",
		cost: ["Metal"]
	}, {
		name: {
			en: "Synchro Hammer",
			fr: "Marteau Synchro"
		},

		effect: {
			en: "If this Pokémon and your opponent’s Active Pokémon have the same amount of Energy attached, this attack does 90 more damage.",
			fr: "Si ce Pokémon et le Pokémon Actif de votre adversaire ont le même nombre d’Énergies attachées, cette attaque inflige 90 dégâts supplémentaires."
		},

		damage: "60+",
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card