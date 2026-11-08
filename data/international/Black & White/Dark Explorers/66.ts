import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Krookodile",
		'fr-fr': "Crocorible",
		'es-es': "Krookodile",
		'it-it': "Krookodile",
		'pt-br': "Krookodile",
		'de-de': "Rabigator"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		553,
	],

	hp: 150,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Krokorok",
		'fr-fr': "Escroco"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Dark Clamp",
				'fr-fr': "Pince des Ténèbres"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire."
			},
			damage: 60,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bombast",
				'fr-fr': "Arrogance"
			},
			effect: {
				'en-us': "Does 40 damage times the number of Prize cards you have taken.",
				'fr-fr': "Inflige 40 dégâts multipliés par le nombre de cartes Récompense que vous avez récupérées."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "They never allow prey to escape. Their jaws are so powerful, they can crush the body of an automobile.",
	},

	thirdParty: {
		cardmarket: 280394,
		tcgplayer: 86543
	}
}

export default card
