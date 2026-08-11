import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Metal Energy",
		'fr-fr': "Énergie Métal",
		'de-de': "Metall-Energie"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Energy",
	set: Set,
	energyType: "Normal",

	hp: 0,

	types: [
		"Metal"
	],
	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279094,
				tcgplayer: 87350
			}
		},
	],

}

export default card
