import { Card } from '../../../interfaces'
import Set from '../Scarlet & Violet Energy'

const card: Card = {
    name: {
        en: "Basic Lightning Energy",
        fr: "Énergie Electrik de base",
        es: "Energía Rayo Básica",
        it: "Energia base Lampo",
        pt: "Energia de Raios Básica",
        de: "Basis-Elektro-Energie"
    },

    rarity: "Common",
    category: "Energy",
    set: Set,
    energyType: "Normal",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836252,
				tcgplayer: 645289
			}
		},
		{
			type: "reverse",
			foil: "tinsel",
			thirdParty: {
				cardmarket: 836975
			}
		}
	]


}

export default card
