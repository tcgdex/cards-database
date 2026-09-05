import { Card } from '../../../interfaces'
import Set from '../Generations'

const card: Card = {
	name: {
		en: "Gardevoir EX",
		fr: "Gardevoir-EX",
		de: "Guardevoir-EX"
	},

	illustrator: "Mizue",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,
	cameoDexIds: [280, 281],

	dexId: [
		282,
	],

	hp: 170,

	types: [
		"Fairy",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Life Leap",
				fr: "Projection Vitale",
				de: "Sprung ins Leben"
			},
			effect: {
				en: "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
				fr: "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Actif de votre adversaire.",
				de: "Heile bei diesem Pokémon genauso viel Schaden, wie du dem Aktiven Pokémon deines Gegners zugefügt hast."
			},
			damage: 20,

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Fairy",
			],
			name: {
				en: "Shining Wind",
				fr: "Vent Étincelant",
				de: "Schimmernder Wind"
			},
			effect: {
				en: "During your opponent's next turn, this Pokémon has no Weakness.",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon n'a pas de Faiblesse.",
				de: "Während des nächsten Zuges deines Gegners hat dieses Pokémon keine Schwäche."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 288539
	}
}

export default card
