import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Primeape",
		fr: "Colossinge",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		57,
	],
	hp: 90,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Mankey",
		fr: "Férosinge",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Swagger",
				fr: "Vantardise",
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
				fr: "Lancez une pièce. Si c’est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Spirited Throw",
				fr: "Lancer Plein d’Esprit",
			},
			effect: {
				en: "If, before doing damage, your opponent's Active Pokémon has more remaining HP than this Pokémon, this attack does 60 more damage.",
				fr: "Si, avant d’infliger des dégâts, il reste plus de PV au Pokémon Actif de votre adversaire qu’à ce Pokémon, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
