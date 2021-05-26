import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Hippowdon",
		fr: "Hippodocus Niv. X",
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		450,
	],
	hp: 130,
	types: [
		"Fighting",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Sand Reset",
				fr: "Redémarrage sableux",
			},
			effect: {
				en: "Once during a game on your turn (before your attack), each player shuffles all cards in play (excluding Pokémon and Supporter cards) into his or her deck. You can't use more than 1 Sand Reset Poké-Power each game.",
				fr: "Une seule fois lors d'une partie lors de votre tour (avant votre attaque), chaque joueur mélange toutes les cartes en jeu (Pokémon et cartes Supporter exclus) avec son deck. Vous ne pouvez pas utiliser plus d'1 Poké-Power Redémarrage sableux par partie.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Shoot",
				fr: "Double shoot",
			},
			effect: {
				en: "Discard 2 Fighting Energy attached to Hippowdon and choose 2 of your opponent's Benched Pokémon. This attack does 40 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez 2 Énergies Fighting attachées à Hippodocus et choisissez 2 des Pokémon de Banc de votre adversaire. Cette attaque leur inflige 40 dégâts à chacun. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 4,



}

export default card
