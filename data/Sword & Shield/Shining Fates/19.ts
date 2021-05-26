import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Pyrobut VMAX"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],

	evolveFrom: {
		fr: "Pyrobut-V"
	},

	attacks: [{
		name: {
			fr: "Riposte"
		},

		effect: {
			fr: "Si ce Pokémon a subi les dégâts d’une attaque pendant le dernier tour de votre adversaire, cette attaque inflige en plus ce montant-là de dégâts."
		},

		damage: "30+",
		cost: ["Fire", "Colorless"]
	}, {
		name: {
			fr: "Ballon Brûlomax"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé."
		},

		damage: 170,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2
}

export default card