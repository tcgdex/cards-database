import { Card } from '../../../interfaces'
import Set from '../POP Series 3'

const card: Card = {
	name: {
		en: "Minun",
		fr: "Negapi",
		de: "Minun"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [312],

	hp: 50,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Cheer Up",
				fr: "Courage !",
				de: "Aufmuntern"
			},
			effect: {
				en: "Draw a card. If you have Plusle in play, draw 2 cards instead.",
				fr: "Piochez une carte. Si vous avez Posipi en jeu, piochez 2 cartes à la place.",
				de: "Ziehe 1 Karte. Wenn du Plusle im Spiel hast, ziehe 2 Karten."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Negative Ion",
				fr: "Ion négatif",
				de: "Negatives Ion"
			},
			effect: {
				en: "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 10 (before applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés par des attaques du Pokémon Défenseur sont réduits de 10 (avant application de la Faiblesse et de la Résistance).",
				de: "Während des nächsten Zuges deines Gegners werden alle Schadenspunkte, die vom Verteidigenden Pokémon zugefügt werden, um 10 Schadenspunkte reduziert (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Power Bolt",
				fr: "« Boulon d'alimentation »",
				de: "Powerbolzen"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon that has any Poké-Powers. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon de votre adversaire qui a un Poké-Power. Cette attaque inflige 30 dégâts à ce Pokémon. (N'appliquez pas la Faiblesse et la Résistance aux Pokémon de Banc.)",
				de: "Wähle 1 Pokémon deines Gegners aus, das eine Poké-Power besitzt. Dieser Angriff fügt dem gewählten Pokémon 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			}

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87487,
				cardmarket: 277452
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87487,
				cardmarket: 277452
			},
		},
	],

}

export default card
