import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Mamoswine",
		'fr-fr': "Mammochon",
		'es-es': "Mamoswine",
		'it-it': "Mamoswine",
		'pt-br': "Mamoswine",
		'de-de': "Mamutel"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		473,
	],

	hp: 150,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Piloswine",
		'fr-fr': "Cochignon",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Frost Stone",
				'fr-fr': "Roc Gelé",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage and the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 50,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Continuous Headbutt",
				'fr-fr': "Coup d'Boule Sans Fin",
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 90 damage times the number of heads.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 90 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "When the temperature rose at the end of the ice age, most Mamoswine disappeared.",
	},

	thirdParty: {
		cardmarket: 280768,
		tcgplayer: 87141
	}
}

export default card
