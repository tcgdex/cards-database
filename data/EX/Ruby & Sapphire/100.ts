import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Magmar ex",
		fr: "Magmar ex",
		de: "Magmar-ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [126],

	hp: 90,

	stage: "Basic",
	types: [
		"Fire"
	],

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Smokescreen",
				fr: "Brouillard",
				de: "Rauchwolke"
			},
			effect: {
				en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Si le Pokémon Défenseur essaye d'attaquer pendant le prochain tour de votre adversaire, votre adversaire doit lancer une pièce. Si c'est pile, l'attaque est sans effet.",
				de: "Falls das Verteidigende Pokémon während des nächsten Zuges deines Gegners anzugreifen versucht, wirft dein Gegner eine Münze. Bei „Zahl“ hat dieser Angriff keine Auswirkungen."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Super Singe",
				fr: "Ça sent le roussi !",
				de: "Super-Versengung"
			},
			effect: {
				en: "The Defending Pokémon is now Burned.",
				fr: "Le Pokémon Défenseur est maintenant Brûlé.",
				de: "Das Verteidigende Pokémon ist jetzt verbrannt."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87054,
				cardmarket: 275748
			}
		}
	]
}

export default card
