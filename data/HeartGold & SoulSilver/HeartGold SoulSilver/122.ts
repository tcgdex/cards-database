import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

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
	energyType: "Normal",

	variants: [
		{
			type: "normal"
		}
	],

	hp: 0,

	thirdParty: {
		cardmarket: 279094,
		tcgplayer: 87350
	}
}

export default card
