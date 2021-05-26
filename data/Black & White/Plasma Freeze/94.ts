import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Kecleon",
		fr: "Kecleon",
	},
	illustrator: "Toyste Beach",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		352,
	],
	hp: 70,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Color Change",
				fr: "Déguisement",
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, this Pokémon is the same type as your opponent's Active Pokémon.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, ce Pokémon est du même type que le Pokémon Actif de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Imittack",
				fr: "Imit’Attaque",
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon's attacks. If this Pokémon has the necessary Energy to use that attack, use it as this attack.",
				fr: "Choisissez 1 des attaques du Pokémon Défenseur. Si ce Pokémon a l'Énergie nécessaire pour utiliser l'attaque choisie, utilisez-la  à la place de cette attaque.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
