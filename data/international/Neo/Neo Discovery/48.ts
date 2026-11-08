import { Card } from 'models/database/card'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		'en-us': "Unown [F]",
		'fr-fr': "Zarbi F",
		'de-de': "Icognito F"
	},

	illustrator: "CR CG gangs",
	rarity: "Uncommon",
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
				'en-us': "[Find]",
				'fr-fr': "[Find]",
				'de-de': "Find"
			},
			effect: {
				'en-us': "Once during your turn (before you attack), if you have Unown F, Unown I, Unown N, and Unown D on your Bench, you may search your deck for a Trainer card. Show that card to your opponent, then put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Une fois pendant votre tour (avant votre attaque), si vous avez Zarbi [F], Zarbi [I], Zarbi [N], et Zarbi [D] sur votre Banc, vous pouvez chercher dans votre deck une carte Dresseur. Montrez cette carte à votre adversaire, puis placez-la dans votre main. Mélangez ensuite votre deck.",
				'de-de': "Once during your turn (before your attack), if you have Unown F, Unown I, Unown N, and Unown D on your bench, you may search your deck for a Trainer card. Show that card to your opponent, then put it into your hand. Shuffle your deck afterward."
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
				cardmarket: 274559,
				tcgplayer: 90207
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274559,
				tcgplayer: 90207
			}
		}
	]
}

export default card

