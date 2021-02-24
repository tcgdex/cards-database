import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Parasect",
		fr: "Parasect",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		47,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Paras",
		fr: "Paras",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Nutritional Support",
				fr: "Support nutritionnel",
			},
			effect: {
				en: "Search your deck for up to 2 Grass Energy cards and attach them to any of your Pokémon in any way you like. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck jusqu'à 2 cartes Énergie Grass et attachez-les à n'importe lequel de vos Pokémon de la façon que vous voulez. Ensuite, mélangez votre deck.",
			},

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Hibernation Spore",
				fr: "Spore d'hibernation",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep. Flip 2 coins instead of 1 between turns. If either of them is tails, the Defending Pokémon is still Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi. Lancez 2 pièces au lieu d'1 entre deux tours. Si l'une d'elles est pile, le Pokémon Défenseur reste Endormi.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
