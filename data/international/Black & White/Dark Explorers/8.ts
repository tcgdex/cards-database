import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Crustle",
		'fr-fr': "Crabaraque",
		'es-es': "Crustle",
		'it-it': "Crustle",
		'pt-br': "Crustle",
		'de-de': "Castellith"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		558,
	],

	hp: 110,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Dwebble",
		'fr-fr': "Crabicoque"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Cut",
				'fr-fr': "Coupe"
			},

			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heavy Bullet",
				'fr-fr': "Projectile Lourd"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâs à 1 des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It possesses legs of enormous strength, enabling it to carry heavy slabs for many days, even when crossing arid land.",
	},

	thirdParty: {
		cardmarket: 280336,
		tcgplayer: 84509
	}
}

export default card
