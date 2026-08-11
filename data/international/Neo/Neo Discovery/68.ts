import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Unown [I]",
		'fr-fr': "Zarbi I",
		'de-de': "Icognito I"
	},

	illustrator: "CR CG gangs",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		201,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Hidden Power",
				'fr-fr': "Puissance cachée",
				'de-de': "Kraftreserve"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Their shapes look like hieroglyphs on ancient tablets. It is said that the two are somehow related.",
		'fr-fr': "Ils ressemblent à des hiéroglyphes inscrits sur d'antiques tablettes. On prétend qu'ils sont de la même origine."
	},

	abilities: [{
		name: {
			'fr-fr': "[Increase]",
			'de-de': "Increase"
		},

		effect: {
			'fr-fr': "Quand vous jouez Zarbi [I] depuis votre main, vous pouvez chercher dans votre deck une autre carte Zarbi et la placer sur votre Banc. Mélangez ensuite votre deck. Vous ne pouvez pas utiliser ce pouvoir si votre Banc est plein.",
			'de-de': "Wenn du Icognito I aus deiner hand ausspielst, kannst du dein Deck nach einer Karte, die icognito in ihren Namen hat, durchsuchen und diese auf deine Bank legen. Mische danach dein Deck. Du kannst diese Fähigkeit nicht anwenden, wenn deine Bank voll ist."
		},

		type: "Pokemon Power"
	}],


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274579,
				tcgplayer: 90213
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274579,
				tcgplayer: 90213
			}
		}
	]
}

export default card

