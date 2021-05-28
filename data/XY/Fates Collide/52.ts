import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Zygarde",
		fr: "Zygarde",
	},
	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		718,
	],
	hp: 90,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Lookout",
				fr: "Surveillance",
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon.",
				fr: "Échangez l'un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aura Break",
				fr: "Aura Inversée",
			},
			effect: {
				en: "If the Defending Pokémon is a Darkness or Fairy Pokémon, it can't attack during your opponent's next turn.",
				fr: "Si le Pokémon Défenseur est un Pokémon Darkness ou Fairy, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
