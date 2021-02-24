import { Card } from '../../../interfaces'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		en: "Rotom",
		fr: "Motisma",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		479,
	],
	hp: 70,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Energy Extract",
				fr: "Extraction d'Énergie",
			},
			effect: {
				en: "Search your deck for a basic Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
				fr: "Cherchez une carte Énergie de base dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Plasmagic",
				fr: "Plasmagie",
			},
			effect: {
				en: "Move 2 damage counters from each of your Pokémon to your opponent's Active Pokémon.",
				fr: "Déplacez 2 marqueurs de dégâts de chacun de vos Pokémon vers le Pokémon Actif de votre adversaire.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
