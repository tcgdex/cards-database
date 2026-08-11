import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Poliwrath",
		'fr-fr': "Tartard",
		'de-de': "Quappo"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		62,
	],

	hp: 120,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Poliwhirl",
		'fr-fr': "Têtarte"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Spiral",
				'fr-fr': "Spirale",
				'de-de': "Spirale"
			},
			effect: {
				'en-us': "As long as Poliwrath is your Active Pokémon, your opponent's Confused Pokémon can't retreat.",
				'fr-fr': "Tant que Tartard est votre Pokémon Actif, le Pokémon Confus de votre adversaire ne peut pas battre en retraite.",
				'de-de': "Solange Quappo dein Aktives Pokémon ist, können die verwirrten Pokémon deines Gegner sich nicht zurückziehen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Split Spiral Punch",
				'fr-fr': "Coup d'poing en demi spirale",
				'de-de': "Spiralhieb"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Das Verteidigende Pokémon ist jetzt verwirrt."
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mega Throw",
				'fr-fr': "Méga lancer",
				'de-de': "Mega Wurf"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Pokémon-ex, this attack does 50 damage plus 30 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon-ex, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "Wenn das Verteidigende Pokmeon ein Pokémon-ex ist, fügt dieser Angriff 50 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276187,
				tcgplayer: 88276
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276187,
				tcgplayer: 88276
			},
		}
	]
}

export default card
