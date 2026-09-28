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
				cardmarket: 786120,
				tcgplayer: 578869
			}
		},
		{
			type: "reverse",
			foil: "cracked-ice",
			thirdParty: {
				cardmarket: 809711,
				tcgplayer: 599742
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 786120,
				tcgplayer: 578869
			}
		},
		{
			type: "normal",
			stamp: ["player-rewards-program"],
			thirdParty: {
				tcgplayer: 627701
			}
		},
		{
			type: "reverse",
			foil: "cosmos",
			stamp: ["player-rewards-program"],
			thirdParty: {
				tcgplayer: 651102
			}
		},
		{
			type: "reverse",
			foil: "cosmos",
			stamp: ["professor-program"],
			thirdParty: {
				tcgplayer: 604495
			}
		}
	]


}

export default card
