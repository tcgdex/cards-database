import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Cinderace VMAX",
		fr: "Pyrobut VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],

	evolveFrom: {
		en: "Cinderace V",
		fr: "Pyrobut-V"
	},

	attacks: [{
		name: {
			en: "Counter",
			fr: "Riposte"
		},

		effect: {
			en: "If this Pokémon was damaged by an attack during your opponent's last turn, this attack does that much more damage.",
			fr: "Si ce Pokémon a subi les dégâts d’une attaque pendant le dernier tour de votre adversaire, cette attaque inflige en plus ce montant-là de dégâts."
		},

		damage: "30+",
		cost: ["Fire", "Colorless"]
	}, {
		name: {
			en: "Max Pyro Ball",
			fr: "Ballon Brûlomax"
		},

		effect: {
			en: "Your opponent’s Active Pokémon is now Burned.",
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