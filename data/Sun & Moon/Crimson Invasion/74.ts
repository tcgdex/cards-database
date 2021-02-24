import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Alolan Exeggutor-GX",
		fr: "Noadkoko d’Alola-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		103,
	],
	hp: 220,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Tropical Head",
				fr: "Tête Tropicale",
			},
			effect: {
				en: "This attack does 20 damage times the amount of Energy attached to this Pokémon to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies attachées à ce Pokémon à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Hammer",
				fr: "Draco-Marteau",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: 120,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tower-Go-Round-GX",
				fr: "Manège Dominant-GX",
			},
			effect: {
				en: "Move any number of Energy from your Pokémon to your other Pokémon in any way you like. (You can't use more than 1 GX attack in a game.)",
				fr: "Déplacez autant de cartes Énergie attachées à vos Pokémon que vous le voulez sur vos autres Pokémon, de la manière que vous voulez. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 180,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
