import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Swalot",
		fr: "Avaltout",
	},
	illustrator: "Yuka Morii",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		317,
	],
	hp: 120,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Gulpin",
		fr: "Gloupti",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Amnesia",
				fr: "Amnésie",
			},
			effect: {
				en: "Choose 1 of your opponent's Active Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
				fr: "Choisissez l’une des attaques du Pokémon Actif de votre adversaire. Ce Pokémon ne peut pas utiliser cette attaque pendant le prochain tour de votre adversaire.",
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Swallow Up",
				fr: "Engloutir",
			},
			effect: {
				en: "If, before doing damage, your opponent's Active Pokémon has less remaining HP than this Pokémon, this attack does 80 more damage.",
				fr: "Si, avant d’infliger des dégâts, il reste moins de PV au Pokémon Actif de votre adversaire qu’à ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
