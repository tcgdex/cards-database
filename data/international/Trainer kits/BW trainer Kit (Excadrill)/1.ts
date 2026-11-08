import { Card } from 'models/database/card'
import Set from '../BW trainer Kit (Excadrill).ts'

const card: Card = {
	dexId: [506],
	set: Set,

	name: {
		'en-us': "Lillipup",
		'fr-fr': "Ponchiot",
		'es-es': "Lillipup",
		'it-it': "Lillipup",
		'pt-br': "Lillipup",
		'de-de': "Yorkleff"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	hp: 50,

	types: [
		"Colorless"
	],

	attacks: [{
		cost: [
			"Colorless",
		],
		name: {
			'en-us': "Pickup",
			'fr-fr': "Ramassage"
		},
		effect: {
			'en-us': "Put an Item card from your discard pile into your hand.",
			'fr-fr': "Prenez une carte Objet dans votre pile de défausse et ajoutez-la à votre main."
		}
	}, {
		cost: [
			"Colorless",
		],
		name: {
			'en-us': "Bite",
			'fr-fr': "Morsure"
		},
		damage: 10
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	description: {
		'en-us': "It faces strong opponents with great courage. But, when at a disadvantage in a fight, this intelligent Pokémon flees."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 280093,
				tcgplayer: 98671
			}
		},
	],

}

export default card
