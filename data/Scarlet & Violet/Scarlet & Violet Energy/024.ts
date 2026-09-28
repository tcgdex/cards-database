import { Card } from '../../../interfaces'
import Set from '../Scarlet & Violet Energy'

const card: Card = {
    name: {
        en: "Basic Metal Energy",
        fr: "Énergie Métal de base",
        es: "Energía Metálica Básica",
        it: "Energia base Metallo",
        pt: "Energia de Metal Básica",
        de: "Basis-Metall-Energie"
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
