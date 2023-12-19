import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Parasect",
		fr: "Parasect",
		de: "Parasek"
	},
	illustrator: "Masako Yamashita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		47,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Paras",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sleep Inducer",
				fr: "Poussododo",
				de: "Sleep Inducer"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose 1 of them and switch it with the Defending Pokémon. The new Defending Pokémon is now Asleep.",
				fr: "Choisissez un des Pokémon du Banc de votre adversaire et échangez-le contre le Pokémon Défenseur. Le nouveau Pokémon Défenseur est maintenant Endormi.",
				de: "Choose 1 of your opponent's Benched Pokémon and switch the Defending Pokémon with it. The new Defending Pokémon is now Asleep."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rupture Pollen",
				fr: "Pollen d'extase",
				de: "Rapture Pollen"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep. If tails, remove 2 damage counters from Parasect.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi. Si c'est pile, retirez 2 marqueurs de dégâts de Parasect.",
				de: "Flip a coin. If heads, the Defending Pokémon is now Asleep. If tails, remove 2 damage counters from Parasect."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
