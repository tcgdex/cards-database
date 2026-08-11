import { Card } from '../../../interfaces'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		en: "Piplup",
		fr: "Tiplouf",
		de: "Plinfa"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [393],

	hp: 50,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Sport",
				fr: "Tourniquet",
				de: "Nassmacher"
			},
			effect: {
				en: "If Piplup has less Energy attached to it than the Defending Pokémon, this attack does 10 damage plus more 10 more damage.",
				fr: "Si Tiplouf possède moins d'Énergies que le Pokémon Défenseur, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
				de: "Wenn Plinfa weniger Energie angelegt ist als an das Verteidigende Pokémon, fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wavelet",
				fr: "Vaguelette",
				de: "Kleine Welle"
			},
			effect: {
				en: "If you have Buizel in play, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Si vous avez Mustébouée en jeu, cette attaque inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Wenn du Bamelin im Spiel hast, fügt dieser Angriff jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],
	description: {
		en: "It lives along shores in northern countries. A skilled swimmer, it dives for over 10 minutes to hunt.",
		fr: "Il vit sur les côtes des régions nordiques. C'est un nageur doué, qui peut plonger durant 10 minutes.",
		de: "Es lebt an den Küsten der nördlichen Länder. Es kann über 10 Minuten unter Wasser bleiben."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88150,
				cardmarket: 278567
			},
		},
	],

}

export default card
