import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Slowbro",
		fr: "Flagadoss",
	},
	illustrator: "Shibuzoh.",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		80,
	],
	hp: 110,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss",
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
			damage: 20,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Facade",
				fr: "Façade",
			},
			effect: {
				en: "If this Pokémon is Burned or Poisoned, this attack does 80 more damage.",
				fr: "Si ce Pokémon est Brûlé ou Empoisonné, cette attaque inflige 80 dégâts supplémentaires.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
