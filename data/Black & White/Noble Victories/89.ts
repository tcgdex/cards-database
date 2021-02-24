import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Druddigon",
		fr: "Drakkarmin",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		621,
	],
	hp: 100,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Rough Skin",
				fr: "Peau Dure",
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), put 2 damage counters on the Attacking Pokémon.",
				fr: "Si ce Pokémon est votre Pokémon Actif et qu'il subit les dégâts d'une attaque de votre adversaire (même si ce Pokémon est mis K.O.), placez 2 marqueurs de dégâts sur le Pokémon Attaquant.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Clutch",
				fr: "Serre",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 60,

		},
	],


	retreat: 2,



}

export default card
