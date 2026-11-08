import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Nidoqueen",
		'fr-fr': "Nidoqueen",
		'de-de': "Nidoqueen"
	},

	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [31],

	hp: 130,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Nidorina",
		'fr-fr': "Nidorina"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Return",
				'fr-fr': "Retour",
				'de-de': "Rückkehr"
			},
			effect: {
				'en-us': "Draw cards until you have 6 cards in your hand.",
				'fr-fr': "Piochez jusqu’à ce que vous ayez 6 cartes en main.",
				'de-de': "Ziehe so viele Karten, bis du 6 Karten auf der Hand hast."
			},
			damage: 30,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Prize Count",
				'fr-fr': "Compteur de Récompense",
				'de-de': "Preiszähler"
			},
			effect: {
				'en-us': "If you have more Prize cards left than your opponent, this attack does 50 damage plus 30 more damage.",
				'fr-fr': "S’il vous reste plus de cartes Récompense que votre adversaire, cette attaque inflige 50 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "Wenn du mehr Preise übrig hast als dein Gegner, fügt dieser Angriff 50 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It uses its scaly, rugged body to seal the entrance of its nest and protect its young from predators."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87710,
				cardmarket: 279558
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279558,
				tcgplayer: 87710
			}
		},
	],

}

export default card
