import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Bronzong 4",
		fr: "Archéodong  Niv. 54",
		de: "Bronzong 4"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		437,
	],
	hp: 90,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Hand Refresh",
				fr: "Regain manuel",
				de: "Hand auffüllen"
			},
			effect: {
				en: "Each player shuffles his or her hand into his or her deck and draws up to 4 cards. (You draw your cards first.)",
				fr: "Chaque joueur mélange sa main avec son deck et pioche jusqu'à 4 cartes. (Vous piochez vos cartes en premier).",
				de: "Jeder Spieler mischt seine Handkarten in sein Deck. Danach zieht jeder Spieler bis zu 4 Karten. (Du ziehst zuerst.)"
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Payback",
				fr: "Représailles",
				de: "Gegenstoß"
			},
			effect: {
				en: "If your opponent has only 1 Prize card left, this attack does 10 damage plus 50 more damage and the Defending Pokémon is now Confused.",
				fr: "Si votre adversaire ne possède plus qu'1 carte Récompense, cette attaque inflige 10 dégâts plus 50 dégâts supplémentaires et le Pokémon Défenseur est maintenant Confus.",
				de: "Wenn dein Gegner nur 1 Preis übrig hat, fügt dieser Angriff 10 Schadenspunkte plus 50 weitere Schadenspunkte zu und das Verteidigende Pokémon ist jetzt verwirrt."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fire",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
