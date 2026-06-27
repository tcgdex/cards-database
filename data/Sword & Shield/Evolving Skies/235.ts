import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		en: "Lightning Energy",
		fr: "Énergie Electrik",
		es: "Energía Rayo",
		it: "Energia Lampo",
		pt: "Energia de Raios",
		de: "Elektro-Energie"
	},

	rarity: "Secret Rare",
	category: "Energy",
	energyType: "Normal",

	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 574293,
				tcgplayer: 246810
			}
		},
	],
}

export default card
