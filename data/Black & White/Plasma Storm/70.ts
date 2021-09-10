import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Beheeyem",
		fr: "Neitram",
		es: "Beheeyem",
		it: "Beheeyem",
		pt: "Beheeyem",
		de: "Megalon"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		606,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Elgyem",
		fr: "Lewsor",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Lock Up",
				fr: "Cage",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
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
				en: "Damakinesis",
				fr: "Dégâkinésie",
			},
			effect: {
				en: "Move 6 damage counters from any of your Pokémon to the Defending Pokémon.",
				fr: "Déplacez 6 marqueurs de dégâts de vos Pokémon vers le Pokémon Défenseur.",
			},

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
