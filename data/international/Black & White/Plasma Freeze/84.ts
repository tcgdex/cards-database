import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Kingdra",
		'fr-fr': "Hyporoi",
		'es-es': "Kingdra",
		'it-it': "Kingdra",
		'pt-br': "Kingdra",
		'de-de': "Seedraking"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		230,
	],

	hp: 140,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Seadra",
		'fr-fr': "Hypocéan",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Dragon Vortex",
				'fr-fr': "Vortex Draconique",
			},
			effect: {
				'en-us': "Does 20 damage times the number of Water Energy cards and Lightning Energy cards in your discard pile. Then, shuffle all of those cards back into your deck.",
				'fr-fr': "Inflige 20 dégâts multipliés par le nombre de cartes Énergie Water et de cartes Énergie Lightning dans votre pile de défausse. Ensuite, mélangez toutes ces cartes avec votre deck.",
			},
			damage: 20,

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Tri Bullet",
				'fr-fr': "Triple Décharge",
			},
			effect: {
				'en-us': "This attack does 30 damage to 3 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à 3 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It lives in caves on the seafloor and creates giant whirlpools every time it moves.",
	},

	thirdParty: {
		cardmarket: 280962,
		tcgplayer: 86449
	}
}

export default card
