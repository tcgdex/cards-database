import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Fighting Energy",
		fr: "Énergie Combat",
		es: "Energía Lucha",
		it: "Energia Combattimento",
		pt: "Energia de Luta",
		de: "Kampf-Energie"
	},

	rarity: "Secret Rare",
	category: "Energy",
	energyType: "Normal",


	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 567341,
				tcgplayer: 241880
			}
		},
	],
}

export default card
