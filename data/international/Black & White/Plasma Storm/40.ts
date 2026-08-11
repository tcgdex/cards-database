import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Cubchoo",
		'fr-fr': "Polarhume",
		'es-es': "Cubchoo",
		'it-it': "Cubchoo",
		'pt-br': "Cubchoo",
		'de-de': "Petznief"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		613,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Hail",
				'fr-fr': "Grêle",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Icy Snow",
				'fr-fr': "Verglas",
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

	retreat: 2,

	description: {
		'en-us': "Their snot is a barometer of health. When healthy, their snot is sticky and the power of their ice moves increases.",
	},

	thirdParty: {
		cardmarket: 280780,
		tcgplayer: 84526
	}
}

export default card
