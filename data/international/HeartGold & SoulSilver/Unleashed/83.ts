import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Super Scoop Up",
		'fr-fr': "Super rappel",
		'de-de': "Super-Anziehungskraft"
	},

	illustrator: "Wataru Kawahara",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Lancez une pièce. Si c’est face, reprenez dans votre main l’un de vos Pokémon ainsi que toutes les cartes qui lui sont attachées.",
		'en-us': "Flip a coin. If heads, return 1 of your Pokémon and all cards attached to it to your hand.",
		'de-de': "Wirf eine Münze. Nimm bei \"Kopf\" 1 deiner Pokémon und alle an es angelegten Karten auf deine Hand zurück."
	},

	trainerType: "Item",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89640,
				cardmarket: 279239
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89640,
				cardmarket: 279239
			}
		},
		{
			type: "reverse",
			foil: "league",
			thirdParty: {
				cardmarket: 450423,
				tcgplayer: 261732
			}
		},
		{
			type: "normal",
			stamp: ["mychael-bryan"],
			thirdParty: {
				cardmarket: 868798,
				tcgplayer: 480113
			}
		},
	],

	hp: 0,

}

export default card
