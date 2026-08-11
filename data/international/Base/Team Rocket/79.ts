import { Card } from 'models/database/card'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		'en-us': "Sleep!",
		'fr-fr': "Bonne nuit, les petits !",
		'de-de': "Schlaf!"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
		'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi.",
		'de-de': "Wirf eine Münze. Bei 'Kopf' schläft das verteidigende Pokémon jetzt."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274132,
				tcgplayer: 89301
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274132,
				tcgplayer: 89301
			}
		}
	]
}

export default card
