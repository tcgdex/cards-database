import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Unown [O]",
		'fr-fr': "Zarbi O",
		'de-de': "Icognito O"
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

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				'en-us': "Observe",
				'fr-fr': "[Observe]",
				'de-de': "Observe"
			},
			effect: {
				'en-us': "Once during your turn (before you attack), you may look at 5 cards from the top of your opponent's deck and put them back in the same order.",
				'fr-fr': "Une fois pendant votre tour (avant votre attaque), vous pouvez regarder les 5 premières cartes du deck de votre adversaire et les replacer dans le même ordre.",
				'de-de': "Du kannst dir einmal während deines Zuges (vor deinem Angriff) die obersten fünf Karten des decks deines Gegners anschauen. lege die karten in derselben Reihenfolge zurück."
			},
		},
	],

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


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274580,
				tcgplayer: 90225
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274580,
				tcgplayer: 90225
			}
		}
	]
}

export default card

