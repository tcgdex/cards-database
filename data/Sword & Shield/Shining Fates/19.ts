import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Pyrobut VMAX",
		en: "Cinderace VMAX"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],

	evolveFrom: {
		fr: "Pyrobut-V",
		en: "Cinderace V"
	},

	attacks: [{
		name: {
			fr: "Riposte",
			en: "Counter"
		},

		effect: {
			fr: "Si ce Pokémon a subi les dégâts d’une attaque pendant le dernier tour de votre adversaire, cette attaque inflige en plus ce montant-là de dégâts.",
			en: "If this Pokémon was damaged by an attack during your opponent’s last turn, this attack does that much more damage."
		},

		damage: "30+",
		cost: ["Fire", "Colorless"]
	}, {
		name: {
			fr: "Ballon Brûlomax",
			en: "Max Pyro Ball"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			en: "Your opponent’s Active Pokémon is now Burned."
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