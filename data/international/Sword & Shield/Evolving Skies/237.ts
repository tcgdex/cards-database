import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		en: "Metal Energy",
		fr: "Énergie Métal",
		es: "Energía Metálica",
		it: "Energia Metallo",
		pt: "Energia de Metal",
		de: "Metall-Energie"
	},

	rarity: "Secret Rare",
	category: "Energy",
	energyType: "Normal",

	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 574295,
				tcgplayer: 246812
			}
		},
	],
}

export default card
