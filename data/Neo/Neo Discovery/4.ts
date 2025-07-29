import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Houndoom",
		fr: "Démolosse",
		de: "Hundemon"
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
		en: "Houndour",
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
				en: "Crunch",
				fr: "Mâchouille",
				de: "Crunch"
			},
			effect: {
				en: "Until the end of your next turn, if an attack damages the Defending Pokémon (after applying Weakness and Resistance), that attack does 20 more damage to the Defending Pokémon.",
				fr: "Jusqu'à la fin de votre prochain tour, si une attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), elle lui inflige 20 dégâts de plus.",
				de: "Until end of your next turn, if an attack damages the Defending Pokémon (after applying Weakness and Resistance), that attack does 20 more damage to the Defending Pokémon."
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
				en: "Flamethrower",
				fr: "Lance-flammes",
				de: "Flamethrower"
			},
			effect: {
				en: "Discard 1 Energy card attached to Houndoom or this attack does nothing.",
				fr: "Défaussez 1 carte Énergie  attachée à Démolosse pour pouvoir utiliser cette attaque.",
				de: "Discard 1  Energy card attached to Houndoom or this attack does nothing."
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

	description: {
		fr: "Quand ils entendent ses hurlements sinistres, les autres Pokémon ont un frisson dans le dos et ils retournent au nid."
	},

	thirdParty: {
		cardmarket: 274515
	}
}

export default card
