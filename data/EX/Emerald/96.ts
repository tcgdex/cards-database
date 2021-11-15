import { Card } from '../../../interfaces'
import Set from '../Emerald'

const card: Card = {
	name: {
		en: "Milotic ex",
		fr: "Milobellus ex"
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
	},

	suffix: "EX",
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Mystic Scale",
				fr: "Écaille mystique"
			},
			effect: {
				en: "As long as Milotic ex is in play, each player can't play any Technical Machine cards from his or her hand. Discard all Technical Machine cards in play (both yours and your opponent's).",
				fr: "Tant que Milobellus ex est en jeu, chaque joueur ne peut pas jouer de carte Machine Technique de sa main. Défaussez toutes les cartes Machine Technique en jeu (les vôtres et celles de votre adversaire)."
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
				fr: "Enveloppe douce"
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite avant la fin du prochain tour de votre adversaire."
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
				fr: "Renvoi d'énergie"
			},
			effect: {
				en: "Move 1 basic Energy card attached to Milotic ex to 1 of your Benched Pokémon.",
				fr: "Déplacez 1 carte Énergie de base attachée à Milobellus ex sur 1 des Pokémon de votre Banc."
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





}

export default card
