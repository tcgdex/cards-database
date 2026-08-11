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
				cardmarket: 786115,
				tcgplayer: 578862
			}
		},
		{
			type: "reverse",
			foil: "cracked-ice",
			thirdParty: {
				cardmarket: 809706,
				tcgplayer: 599745
			}
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["player-rewards-program"],
			thirdParty: {
				tcgplayer: 623651
			}
		},
		{
			type: "reverse",
			foil: "cosmos",
			stamp: ["player-rewards-program"],
			thirdParty: {
				tcgplayer: 651115
			}
		},
		{
			type: "reverse",
			foil: "cosmos",
			stamp: ["professor-program"],
		}
	]


}

export default card
