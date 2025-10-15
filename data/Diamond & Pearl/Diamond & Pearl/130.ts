import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Metal Energy",
		fr: "Énergie Métal",
		de: "Metall-Energie"
	},

	illustrator: undefined,
	rarity: "Common",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	thirdParty: {
		cardmarket: 277629,
		tcgplayer: 87349
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse"
		}
	]
}

export default card
