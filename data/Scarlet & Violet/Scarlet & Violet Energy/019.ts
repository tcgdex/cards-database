import { Card } from '../../../interfaces'
import Set from '../Scarlet & Violet Energy'

const card: Card = {
    name: {
        en: "Water Energy",
        fr: "Énergie Eau",
        es: "Energía Agua",
        it: "Energia Acqua",
        pt: "Energia de Água",
        de: "Wasser-Energie"
    },

    rarity: "Common",
    category: "Energy",
    set: Set,
    energyType: "Normal",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836251,
				tcgplayer: 645288
			}
			
		},
		{
				type: "reverse",
				foil: "tinsel",
				thirdParty: {
					cardmarket: 836974
				}
		}
	]


}

export default card
