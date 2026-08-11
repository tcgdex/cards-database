import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Lum Berry",
		'fr-fr': "Baie Prine",
		'de-de': "Prunusbeere"
	},

	illustrator: "Kazuo Yazawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		'en-us': "Attach Lum Berry to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. At any time between turns, if the Pokémon this card is attached to is affected by any Special Conditions, remove all of them. Then, discard Lum Berry.",
		'fr-fr': "Attachez Baie Prine à 1 de vos Pokémon qui ne possède pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O., défaussez-la.\n\nÀ la fin de chaque tour, si le Pokémon auquel cette carte est attachée possède des États Spéciaux, retirez-les lui tous. Ensuite, défaussez Baie Prine.[1]",
		'de-de': "At any time between turns, if the Pokémon this card is attached to is affected by any Special Conditions, remove all of them. Then, discard Lum Berry."
	},

	thirdParty: {
		tcgplayer: 86920,
		cardmarket: 276589
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86920,
				cardmarket: 276589
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 86920,
				cardmarket: 276589
			},
		}
	],
}

export default card
