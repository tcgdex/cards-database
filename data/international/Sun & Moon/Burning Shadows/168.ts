import { Card } from 'models/database/card'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		'en-us': "Darkness Energy",
		'fr-fr': "Énergie Obscurité",
		'es-es': "Energía Oscura",
		'it-it': "Energia Oscurità",
		'pt-br': "Energia de Escuridão",
		'de-de': "Finsternis-Energie"
	},

	illustrator: undefined,
	rarity: "Secret Rare",
	category: "Energy",
	set: Set,
	stage: "Basic",
	energyType: "Normal",

	effect: {
		'en-us': "",
		'fr-fr': "",
		'es-es': "",
		'it-it': "",
		'pt-br': "",
		'de-de': ""
	},

	thirdParty: {
		cardmarket: 299566,
		tcgplayer: 138636
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
