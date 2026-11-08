import { Card } from 'models/database/card'
import Set from '../Legends Awakened'

const card: Card = {
	name: {
		'en-us': "Groudon",
		'fr-fr': "Groudon",
		'de-de': "Groudon"
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
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Drought",
				'fr-fr': "Sécheresse",
				'de-de': "Dürre"
			},
			effect: {
				'en-us': "Choose up to 2 basic Fighting Energy cards from your hand and attach them to 1 of your Pokémon.",
				'fr-fr': "Choisissez jusqu'à 2 cartes Énergie de base Fighting de votre main et attachez-les à 1 de vos Pokémon.",
				'de-de': "Wähle bis zu 2 -Basis-Energiekarten von deiner Hand und lege sie an 1 deiner Pokémon an."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Major Earthquake",
				'fr-fr': "Gros tremblement de terre",
				'de-de': "Schweres Erdbeben"
			},
			effect: {
				'en-us': "Discard 2 Fighting Energy attached to Groudon and this attack does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Défaussez 2 Énergies Fighting attachées à Groudon et cette attaque inflige 10 dégâts à chacun de vos Pokémon de Banc. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Lege 2 an Groudon angelegte -Energien auf deinen Ablagestapel und dieser Angriff fügt jedem Pokémon auf deiner Bank 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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

	description: {
		'en-us': "It had been asleep in underground magma ever since it fiercely fought Kyogre long ago.",
		'fr-fr': "Il dormait dans le magma souterrain depuis sa lutte féroce contre Kyogre, il a longtemps de cela."
	},

	thirdParty: {
		cardmarket: 278178,
		tcgplayer: 85924
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
