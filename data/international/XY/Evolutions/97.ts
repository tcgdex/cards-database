import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Darkness Energy",
		'fr-fr': "Énergie Obscurité",
		'es-es': "Energía Oscura",
		'it-it': "Energia Oscurità",
		'pt-br': "Energia de Escuridão",
		'de-de': "Finsternis-Energie"
	},

	rarity: "Common",
	category: "Energy",
	set: Set,
	energyType: "Normal",

	thirdParty: {
		cardmarket: 293459,
		tcgplayer: 124110
	}
}

export default card
