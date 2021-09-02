import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Lillipup",
		fr: "Ponchiot",
		es: "Lillipup",
		it: "Lillipup",
		pt: "Lillipup",
		de: "Yorkleff"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		506,
	],
	hp: 50,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pickup",
				fr: "Ramassage",
			},
			effect: {
				en: "Put an Item card from your discard pile into your hand.",
				fr: "Prenez une carte Objet dans votre pile de défausse et ajoutez-la à votre main.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
