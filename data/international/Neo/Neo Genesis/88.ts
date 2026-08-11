import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "PokéGear",
		'fr-fr': "Pokéquipement",
		'de-de': "PokéCom"
	},

	illustrator: undefined,
	rarity: "Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Look at the top 7 cards of your deck. If any of them are Trainer cards, you may show 1 of them to your opponent and put it into your hand. Shuffle your deck afterward. You can't play any more Trainer cards this turn.",
		'fr-fr': "Regardez les 7 cartes du dessus de votre deck. Si une ou plusieurs d'entre elles sont des cartes Dresseur, vous pouvez montrer l'une d'elles à votre adversaire et la placer dans votre main. Mélangez ensuite votre deck. Vous ne pouvez plus jouer de carte Dresseur pendant ce tour.",
		'de-de': "Look at the top 7 cards of your deck. If any of them are Trainer cards, you may show 1 of them to your opponent and put it into your hand. Shuffle your deck afterward. You can't play any more Trainer cards this turn."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274488
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274488
			}
		}
	]
}

export default card
