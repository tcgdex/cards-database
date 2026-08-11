import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Klang",
		'fr-fr': "Clic",
		'es-es': "Klang",
		'it-it': "Klang",
		'pt-br': "Klang",
		'de-de': "Kliklak"
	},

	illustrator: "Naoki Saito",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		600,
	],

	hp: 80,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Klink",
		'fr-fr': "Tic",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Bind",
				'fr-fr': "Étreinte",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 10,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gear Grind",
				'fr-fr': "Lancécrou",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 60 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 60,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "By changing the direction in which it rotates, it communicates its feelings to others. When angry, it rotates faster.",
	},

	thirdParty: {
		cardmarket: 279813,
		tcgplayer: 86474
	}
}

export default card
