import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Machamp",
		'fr-fr': "Mackogneur",
	},

	illustrator: "PLANETA",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		68,
	],

	hp: 150,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Machoke",
		'fr-fr': "Machopeur",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Fighting Fury",
				'fr-fr': "Furie Combative",
			},
			effect: {
				'en-us': "Each of your Fighting Pokémon's attacks do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "Les attaques de vos Pokémon Fighting infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Machamp Crush",
				'fr-fr': "Mackogneur Broyeur",
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 40 (before applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, tous les dégâts infligés par les attaques du Pokémon Défenseur sont réduits de 40 (avant application de la Faiblesse et de la Résistance).",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its four ruggedly developed arms can launch a flurry of 1,000 punches in just two seconds.",
	},

	thirdParty: {
		cardmarket: 288480,
		tcgplayer: 113700
	}
}

export default card
