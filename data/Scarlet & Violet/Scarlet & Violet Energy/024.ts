import { Card } from '../../../interfaces'
import Set from '../Scarlet & Violet Energy'

const card: Card = {
    name: {
        en: "Metal Energy",
        fr: "Énergie Métal",
        es: "Energía Metálica",
        it: "Energia Metallo",
        pt: "Energia de Metal",
        de: "Metall-Energie"
    },

    rarity: "Common",
    category: "Energy",
    set: Set,
    energyType: "Normal",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836256,
				tcgplayer: 645304
			}
		},
		{
			type: "reverse",
			foil: "tinsel",
			thirdParty: {
				cardmarket: 836979
			}
		}
	]


}

export default card
