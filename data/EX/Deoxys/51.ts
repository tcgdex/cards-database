import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Weezing",
		fr: "Smogogo",
		de: "Smogmog"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		110,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Koffing",
		fr: "Smogo"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Liability",
				fr: "Responsabilité",
				de: "Liability"
			},
			effect: {
				en: "Put damage counters on the Defending Pokémon until it is 10 HP away from being Knocked Out. Weezing does 70 damage to itself.",
				fr: "Placez des marqueurs de dégât sur le Pokémon Défenseur jusqu'à ce qu'il ne soit plus qu'à 10 Points de vie. Smogogo s'inflige 70 dégâts.",
				de: "Put damage counters on the Defending Pokémon until it is 10 HP from being Knock Out. Weezing does 70 damage to itself."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Smogscreen",
				fr: "Para-brouillard",
				de: "Smogscreen"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned. If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné. Si le Pokémon Défenseur essaye d'attaquer lors du prochain tour de votre adversaire, votre adversaire lance une pièce. Si c'est pile, cette attaque est sans effet.",
				de: "The Defending Pokémon is now Poisoned. If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flip a coin. If tails, that attack does nothing."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		tcgplayer: 90560,
		cardmarket: 276454
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
