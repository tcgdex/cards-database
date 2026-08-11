import { Card } from 'models/database/card'
import Set from '../SM trainer Kit (Lycanroc)'

const card: Card = {
	dexId: [732],
	set: Set,

	name: {
		'en-us': "Trumbeak",
		'fr-fr': "Piclairon",
		'es-es': "Trumbeak",
		'it-it': "Trumbeak",
		'pt-br': "Trumbeak",
		'de-de': "Trompeck"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 80,
	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Pikipek",
		'fr-fr': "Picassaut",
		'es-es': "Pikipek",
		'it-it': "Pikipek",
		'pt-br': "Pikipek",
		'de-de': "Peppeck"
	},

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bullet Seed"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 20 damage for each heads."
			},
			damage: "20×"
		},
	],
	stage: "Stage1",
	retreat: 1,

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-20"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 297241,
				tcgplayer: 152830
			}
		},
	],

}

export default card