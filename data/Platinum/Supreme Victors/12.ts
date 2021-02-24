import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Swampert",
		fr: "Laggron",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		260,
	],
	hp: 130,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Marshtomp",
		fr: "Flobio",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Root Protector",
				fr: "Protège-racine",
			},
			effect: {
				en: "Any damage done to Swampert by attacks from your opponent's Pokémon that isn't an Evolved Pokémon is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Tous les dégâts infligés à Laggron par les attaques du Pokémon de votre adversaire sont réduits de 20 si ce n'est pas un Pokémon Évolué (après application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Drag Off",
				fr: "Traîne",
			},
			effect: {
				en: "Before doing damage, you may switch your opponent's Active Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Avant d'infliger des dégâts, vous pouvez échanger le Pokémon Actif de votre adversaire avec 1 de ses Pokémon de Banc.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Push Over",
				fr: "Facilité",
			},
			effect: {
				en: "Does 60 damage plus 10 more damage for each Fighting Energy attached to Swampert.",
				fr: "Inflige 60 dégâts plus 10 dégâts supplémentaires pour chaque Énergie Fighting attachée à Laggron.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+30"
		},
	],

	retreat: 2,



}

export default card
