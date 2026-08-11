import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Whimsicott",
		'fr-fr': "Farfaduvet",
		'es-es': "Whimsicott",
		'it-it': "Whimsicott",
		'pt-br': "Whimsicott",
		'de-de': "Elfun"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		547,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Cottonee",
		'fr-fr': "Doudouvet",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Helping Hand",
				'fr-fr': "Coup d'Main",
			},
			effect: {
				'en-us': "Search your deck for a basic Energy card and attach it to 1 of your Benched Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Cherchez une carte Énergie de base dans votre deck et attachez-la à 1 de vos Pokémon de Banc. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Cotton Guard",
				'fr-fr': "Cotogarde",
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to this Pokémon by attacks is reduced by 30 (after applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, tous les dégâts infligés à ce Pokémon par des attaques sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 0,

	description: {
		'en-us': "Like the wind, it can slip through any gap, no matter how small. It leaves balls of white fluff behind.",
	},

	thirdParty: {
		cardmarket: 279976,
		tcgplayer: 90567
	}
}

export default card
