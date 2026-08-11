import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Dustox",
		'fr-fr': "Papinox",
		'de-de': "Pudox"
	},

	illustrator: "Yukiko Baba",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [269],

	hp: 130,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Cascoon",
		'fr-fr': "Blindalys"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Camouflage Pattern",
				'fr-fr': "Motif camouflage",
				'de-de': "Camouflage Pattern"
			},
			effect: {
				'en-us': "Prevent all effects of attacks, including damage, done to Dustox by your opponent's Pokémon that is affected by 2 or more Special Conditions.",
				'fr-fr': "Prévenez tous les effets d'attaques, dégâts inclus, infligés à Papinox par des Pokémon de votre adversaire étant affectés par au moins 2 États Spéciaux.",
				'de-de': "Prevent all effects of attacks, including damage, done to Dustox by your opponent's Pokémon that is affected by 2 or more Special Conditions."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Smogscreen",
				'fr-fr': "Para-brouillard",
				'de-de': "Smogscreen"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned. If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné. Si le Pokémon Défenseur essaye d'attaquer lors du prochain tour de votre adversaire, celui-ci lance une pièce. Si c'est pile, cette attaque est sans effet.",
				'de-de': "The Defending Pokémon is now Poisoned. If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Chemical Scale",
				'fr-fr': "Écaille chimique",
				'de-de': "Chemical Scale"
			},
			effect: {
				'en-us': "If the Defending Pokémon has any Poké-Powers or Poké-Bodies, the Defending Pokémon is now Burned and Confused.",
				'fr-fr': "Si le Pokémon Défenseur possède des Poké-Powers ou des Poké-Bodies, il est maintenant Brûlé et Confus.",
				'de-de': "If the Defending Pokémon has any Poké-Powers or Poké-Bodies, the Defending Pokémon is now Burned and Confused."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 85058,
				cardmarket: 278446
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278446,
				tcgplayer: 85058
			}
		}
	],

	retreat: 0
}

export default card
