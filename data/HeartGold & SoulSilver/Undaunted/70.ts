import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Togepi",
		fr: "Togepi",
		de: "Togepi"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		175,
	],

	hp: 40,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Plead",
				fr: "Supplication",
				de: "Flehen"
			},
			effect: {
				en: "Ask your opponent if you may draw 2 cards. If yes, draw 2 cards. If no, this attack does 20 damage to the Defending Pokémon.",
				fr: "Demandez à votre adversaire si vous pouvez piocher 2 cartes. S’il accepte, piochez 2 cartes. S’il refuse, cette attaque inflige 20 dégâts au Pokémon Défenseur.",
				de: "Frage deinen Gegner, ob du 2 Karten ziehen darfst. Wenn ja, ziehe 2 Karten. Wenn nicht, fügt dieser Angriff dem Verteidigenden Pokémon 20 Schadenspunkte zu."
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

	description: {
		en: "A proverb claims that happiness will come to anyone who can make a sleeping Togepi stand up."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
