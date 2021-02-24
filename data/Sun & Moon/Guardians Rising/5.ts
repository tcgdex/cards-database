import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Lilligant",
		fr: "Fragilady",
	},
	illustrator: "You Iribi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		549,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Petilil",
		fr: "Chlorobule",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Petal Blizzard",
				fr: "Tempête Florale",
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Petal Dance",
				fr: "Danse-Fleur",
			},
			effect: {
				en: "Flip 3 coins. This attack does 40 damage for each heads. This Pokémon is now Confused.",
				fr: "Lancez 3 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face. Ce Pokémon est maintenant Confus.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
