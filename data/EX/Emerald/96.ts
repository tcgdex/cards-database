import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Milotic ex",
		fr: "Milobellus ex",
		de: "Milotic ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		350,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Feebas",
		fr: "Barpau"
	},

	suffix: "EX",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Mystic Scale",
				fr: "Écaille mystique",
				de: "Mystic Scale"
			},
			effect: {
				en: "As long as Milotic ex is in play, each player can't play any Technical Machine cards from his or her hand. Discard all Technical Machine cards in play (both yours and your opponent's).",
				fr: "Tant que Milobellus ex est en jeu, chaque joueur ne peut pas jouer de carte Machine Technique de sa main. Défaussez toutes les cartes Machine Technique en jeu (les vôtres et celles de votre adversaire).",
				de: "As long as Milotic ex is in play, each player cant play any Tecnical Machine cards from his or her hand. Discard all Technical Maschine cards in play. (both your and your opponents)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Gentle Wrap",
				fr: "Enveloppe douce",
				de: "Gentle Wrap"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite avant la fin du prochain tour de votre adversaire.",
				de: "The Defending Pokémon cant reatreat during your Opponents next turn"
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Reflect Energy",
				fr: "Renvoi d'énergie",
				de: "Reflect Energy"
			},
			effect: {
				en: "Move 1 basic Energy card attached to Milotic ex to 1 of your Benched Pokémon.",
				fr: "Déplacez 1 carte Énergie de base attachée à Milobellus ex sur 1 des Pokémon de votre Banc.",
				de: "Move 1 basic Energy card attached to Milotic ex to 1 of your Benched Pokémon"
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 2,

	thirdParty: {
		tcgplayer: 87460,
		cardmarket: 276607
	},

	variants: [
		{
			type: "holo",
		},
	]
}

export default card
