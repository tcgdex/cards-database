import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Naganadel-GX",
		'fr-fr': "Mandrillon-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		804,
	],
	hp: 210,
	types: [
		"Psychic",
	],
	evolveFrom: {
		'en-us': "Poipole",
		'fr-fr': "Vémini",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Beast Raid",
				'fr-fr': "Raid Chimérique",
			},
			effect: {
				'en-us': "This attack does 20 damage for each of your Ultra Beasts in play.",
				'fr-fr': "Cette attaque inflige 20 dégâts pour chacune de vos Ultra-Chimères en jeu.",
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
				'en-us': "Jet Needle",
				'fr-fr': "Gerbe d’Aiguilles",
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Weakness or Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
			},
			damage: 110,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Stinger-GX",
				'fr-fr': "Aiguillon-GX",
			},
			effect: {
				'en-us': "Both players shuffle their Prize cards into their decks. Then, each player puts the top 3 cards of their deck face down as their Prize cards. (You can't use more than 1 GX attack in a game.)",
				'fr-fr': "Les deux joueurs mélangent leurs cartes Récompense avec leurs decks. Ensuite, chaque joueur place les 3 cartes du dessus de son deck, face cachée, comme cartes Récompense. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
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
