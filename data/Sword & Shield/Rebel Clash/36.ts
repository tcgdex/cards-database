import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Cinderace VMAX",
		fr: "Pyrobut VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 320,

	evolveFrom: {
		en: "Cinderace V",
		fr: "Pyrobut-V"
	},

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Counter",
				fr: "Riposte"
			},
			effect: {
				en: "If this Pokémon was damaged by an attack during your opponent's last turn, this attack does that much more damage.",
				fr: "Si ce Pokémon a subi les dégâts d’une attaque pendant le dernier tour de votre adversaire, cette attaque inflige en plus ce montant-là de dégâts."
			},
			damage: "30+",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Max Pyro Ball",
				fr: "Ballon Brûlomax"
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Burned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé."
			},
			damage: 170,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,
	types: ["Fire"]
}

export default card
