import { Card } from '../../../interfaces'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		en: "Lampent",
		fr: "Mélancolux",
	},
	illustrator: "miki kudo",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		608,
	],
	hp: 80,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Litwick",
		fr: "Funécire",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Mirror Mirror",
				fr: "Miroir",
			},
			effect: {
				en: "Each player either draws or discards cards until that player has 4 cards in his or her hand. (Your opponent does this first.)",
				fr: "Chaque joueur pioche ou défausse des cartes jusqu’à avoir 4 cartes dans sa main. (Votre adversaire le fait en premier.)",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Flickering Flames",
				fr: "Flammes Vacillantes",
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Asleep.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
