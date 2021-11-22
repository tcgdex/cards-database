import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Tyranitar ex δ",
		fr: "Tyranocif ex δ"
	},
	illustrator: "Yusuke Shimada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		248,
	],
	hp: 150,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Pupitar",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Electromark",
				fr: "Électro-marque"
			},
			effect: {
				en: "Put a Shock-wave marker on 1 of your opponent's Pokémon.",
				fr: "Placez un marqueur Électrochoc sur 1 des Pokémon de votre adversaire."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hyper Claws",
				fr: "Hyper griffes"
			},
			effect: {
				en: "If the Defending Pokémon is a Stage 2 Evolved Pokémon, this attack does 70 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur est un Pokémon Évolué de Niveau 2, cette attaque inflige 70 dégâts plus 20 dégâts supplémentaires."
			},
			damage: "70+",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Shock-wave",
				fr: "Électrochoc"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon that has any Shock-wave markers on it. That Pokémon is Knocked Out.",
				fr: "Choisissez 1 des Pokémon de votre adversaire possédant des marqueurs Électrochoc. Ce Pokémon est mis K.O."
			},

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
