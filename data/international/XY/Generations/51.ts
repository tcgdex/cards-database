import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Clefable",
		'fr-fr': "Mélodelfe",
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		36,
	],

	hp: 90,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Clefairy",
		'fr-fr': "Mélofée",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Follow Me",
				'fr-fr': "Par Ici",
			},
			effect: {
				'en-us': "Switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon.",
				'fr-fr': "Échangez l'un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Moonblast",
				'fr-fr': "Pouvoir Lunaire",
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 30 (before applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, tous les dégâts infligés par les attaques du Pokémon Défenseur sont réduits de 30 (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its hearing is so acute it can hear a pin drop over half a mile away. It lives on quiet mountains.",
	},

	thirdParty: {
		cardmarket: 288489,
		tcgplayer: 113709
	}
}

export default card
