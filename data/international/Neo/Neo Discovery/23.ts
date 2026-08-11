import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Houndoom",
		'fr-fr': "Démolosse",
		'de-de': "Hundemon"
	},

	illustrator: "Shin-ichi Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		229,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Houndour",
		'fr-fr': "Malosse"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Crunch",
				'fr-fr': "Mâchouille",
				'de-de': "Crunch"
			},
			effect: {
				'en-us': "Until the end of your next turn, if an attack damages the Defending Pokémon (after applying Weakness and Resistance), that attack does 20 more damage to the Defending Pokémon.",
				'fr-fr': "Jusqu'à la fin de votre prochain tour, si une attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), elle lui inflige 20 dégâts de plus.",
				'de-de': "Until end of your next turn, if an attack damages the Defending Pokémon (after applying Weakness and Resistance), that attack does 20 more damage to the Defending Pokémon."
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flamethrower",
				'fr-fr': "Lance-flammes",
				'de-de': "Flamethrower"
			},
			effect: {
				'en-us': "Discard 1 Energy card attached to Houndoom or this attack does nothing.",
				'fr-fr': "Défaussez 1 carte Énergie  attachée à Démolosse pour pouvoir utiliser cette attaque.",
				'de-de': "Discard 1  Energy card attached to Houndoom or this attack does nothing."
			},
			damage: 50,

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Upon hearing its eerie howls, other Pokémon get the shivers and head straight back to their nests.",
		'fr-fr': "Quand ils entendent ses hurlements sinistres, les autres Pokémon ont un frisson dans le dos et ils retournent au nid."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274515,
				tcgplayer: 86204
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274515,
				tcgplayer: 86204
			}
		}
	]
}

export default card

