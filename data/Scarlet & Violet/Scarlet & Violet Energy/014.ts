import { Card } from '../../../interfaces'
import Set from '../Scarlet & Violet Energy'

const card: Card = {
    name: {
        en: "Basic Fighting Energy",
        fr: "Énergie Combat de base",
        es: "Energía Lucha Básica",
        it: "Energia base Lotta",
        pt: "Energia de Luta Básica",
        de: "Basis-Kampf-Energie"
    },

    rarity: "Common",
    category: "Energy",
    set: Set,
    energyType: "Normal",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 786118,
				tcgplayer: 578867
			}
		},
		{
			type: "reverse",
			foil: "cracked-ice",
			thirdParty: {
				cardmarket: 809709,
				tcgplayer: 599746
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 786118,
				tcgplayer: 578867
			}
		},
		{
			type: "normal",
			stamp: ["player-rewards-program"],
			thirdParty: {
				tcgplayer: 623654
			}
		},
		{
			type: "reverse",
			foil: "cosmos",
			stamp: ["player-rewards-program"],
			thirdParty: {
				tcgplayer: 651096
			}
		},
		{
			type: "reverse",
			foil: "cosmos",
			stamp: ["professor-program"],
			thirdParty: {
				tcgplayer: 604501
			}
		}
	]


}

export default card
