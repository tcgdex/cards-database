import { Card } from 'models/database/card'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		'en-us': "Sabrina’s Suggestion",
		'fr-fr': "Suggestion de Morgane",
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Trainer",

	set: Set,











	effect: {
		'fr-fr': "Votre adversaire dévoile sa main. Vous pouvez choisir une carte Supporter que vous y trouvez et utiliser son effet en tant qu’effet de cette carte.",
		'en-us': "Your opponent reveals their hand. You may choose a Supporter card you find there and use the effect of that card as the effect of this card."
	},
	trainerType: "Supporter",

}

export default card
