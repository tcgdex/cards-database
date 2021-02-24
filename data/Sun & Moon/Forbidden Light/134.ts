import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Naganadel-GX",
		fr: "Mandrillon-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
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
		en: "Poipole",
		fr: "Vémini",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Beast Raid",
				fr: "Raid Chimérique",
			},
			effect: {
				en: "This attack does 20 damage for each of your Ultra Beasts in play.",
				fr: "Cette attaque inflige 20 dégâts pour chacune de vos Ultra-Chimères en jeu.",
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
				en: "Jet Needle",
				fr: "Gerbe d’Aiguilles",
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
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
				en: "Stinger-GX",
				fr: "Aiguillon-GX",
			},
			effect: {
				en: "Both players shuffle their Prize cards into their decks. Then, each player puts the top 3 cards of their deck face down as their Prize cards. (You can't use more than 1 GX attack in a game.)",
				fr: "Les deux joueurs mélangent leurs cartes Récompense avec leurs decks. Ensuite, chaque joueur place les 3 cartes du dessus de son deck, face cachée, comme cartes Récompense. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
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
