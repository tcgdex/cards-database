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
				cardmarket: 689753,
				tcgplayer: 475427
			}
		},
		{
			type: "reverse",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 735367,
				tcgplayer: 517179
			}
		},
		{
			type: "normal",
			stamp: ["player-rewards-program"],
			thirdParty: {
				tcgplayer: 515644,
			}
		},
		{
			type: "reverse",
			foil: "cosmos",
			stamp: ["player-rewards-program"],
			thirdParty: {
				tcgplayer: 622937
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 780805,
				tcgplayer: 563014
			}
		},
		{
			type: "reverse",
			foil: "cosmos",
			stamp: ["professor-program"],
			thirdParty: {
				tcgplayer: 599458
			}
		}
	]


}

export default card
