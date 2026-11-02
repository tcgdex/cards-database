import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Kartana",
		fr: "Katagami",
		de: "Katagami"
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		798,
	],
	hp: 60,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
			],
			name: {
				en: "Divine Paper",
				fr: "Papier Sublime",
				de: "Himmelspapier"
			},
			effect: {
				en: "If your opponent has exactly 6 Prize cards remaining, this attack does 90 more damage.",
				fr: "S’il reste exactement 6 cartes Récompense à votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
				de: "Wenn dein Gegner genau 6 verbleibende Preiskarten hat, fügt diese Attacke 90 Schadenspunkte mehr zu."
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,




	description: {
		en: "One of the Ultra Beast life-forms, it was observed cutting down a gigantic steel tower with one stroke of its blade.",
		de: "Diese Ultrabestie wurde dabei beobachtet, wie sie einen riesigen stählernen Turm mit nur einem Hieb ihrer Klingen zerteilte."
	},
}

export default card
