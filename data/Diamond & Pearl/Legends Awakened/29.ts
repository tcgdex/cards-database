import { Card } from '../../../interfaces'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		en: "Groudon",
		fr: "Groudon",
	},
	illustrator: "Kazuaki Aihara",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		383,
	],
	hp: 100,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Drought",
				fr: "Sécheresse",
			},
			effect: {
				en: "Choose up to 2 basic Fighting Energy cards from your hand and attach them to 1 of your Pokémon.",
				fr: "Choisissez jusqu'à 2 cartes Énergie de base Fighting de votre main et attachez-les à 1 de vos Pokémon.",
			},

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Major Earthquake",
				fr: "Gros tremblement de terre",
			},
			effect: {
				en: "Discard 2 Fighting Energy attached to Groudon and this attack does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Défaussez 2 Énergies Fighting attachées à Groudon et cette attaque inflige 10 dégâts à chacun de vos Pokémon de Banc. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
