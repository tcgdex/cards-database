import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Naganadel-GX",
		fr: "Mandrillon-GX",
		de: "Agoyon-GX"
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
		en: "Poipole",
		fr: "Vémini",
		de: "Venicro"
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
				de: "Bestien-Raubzug"
			},
			effect: {
				en: "This attack does 20 damage for each of your Ultra Beasts in play.",
				fr: "Cette attaque inflige 20 dégâts pour chacune de vos Ultra-Chimères en jeu.",
				de: "Diese Attacke fügt 20 Schadenspunkte mal der Anzahl deiner Ultrabestien im Spiel zu."
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
				de: "Jetnadel"
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness or Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				de: "Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert."
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
				de: "Stachel-GX"
			},
			effect: {
				en: "Both players shuffle their Prize cards into their decks. Then, each player puts the top 3 cards of their deck face down as their Prize cards. (You can't use more than 1 GX attack in a game.)",
				fr: "Les deux joueurs mélangent leurs cartes Récompense avec leurs decks. Ensuite, chaque joueur place les 3 cartes du dessus de son deck, face cachée, comme cartes Récompense. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				de: "Beide Spieler mischen ihre Preiskarten in ihre Decks. Anschließend legt jeder Spieler die obersten 3 Karten seines Decks als seine verdeckten Preiskarten ab. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
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
