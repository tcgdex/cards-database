import { Card } from '../../../interfaces'
import Set from '../Scarlet & Violet Energy'

const card: Card = {
    name: {
        en: "Basic Psychic Energy",
        fr: "Énergie Psy de base",
        es: "Energía Psíquica Básica",
        it: "Energia base Psico",
        pt: "Energia Psíquica Básica",
        de: "Basis-Psycho-Energie"
    },

    rarity: "Common",
    category: "Energy",
    set: Set,
    energyType: "Normal",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 836253,
				tcgplayer: 645301
			}
		},
		{
			type: "reverse",
			foil: "tinsel",
			thirdParty: {
				cardmarket: 836976
			}
		}
	]


}

export default card
