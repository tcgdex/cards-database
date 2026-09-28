import { Card } from '../../../interfaces'
import Set from '../Scarlet & Violet Energy'

const card: Card = {
    name: {
        en: "Basic Grass Energy",
        fr: "Énergie Plante de base",
        es: "Energía Planta Básica",
        it: "Energia base Erba",
        pt: "Energia de Grama Básica",
        de: "Basis-Pflanze-Energie"
    },

    rarity: "Common",
    category: "Energy",
    set: Set,
    energyType: "Normal",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836249,
				tcgplayer: 645286
			}
		},
		{
			type: "reverse",
			foil: "tinsel",
			thirdParty: {
				cardmarket: 836972
			}
		}
	]

}

export default card
