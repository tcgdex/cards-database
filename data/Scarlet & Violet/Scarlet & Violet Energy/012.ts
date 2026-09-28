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
				cardmarket: 786116,
				tcgplayer: 578866
			}
		},
		{
			type: "reverse",
			foil: "cracked-ice",
			thirdParty: {
				cardmarket: 809707,
				tcgplayer: 599741
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 786116,
				tcgplayer: 578866
			}
		},
		{
			type: "normal",
			stamp: ["player-rewards-program"],
			thirdParty: {
				tcgplayer: 623652
			}
		},
		{
			type: "reverse",
			foil: "cosmos",
			stamp: ["player-rewards-program"],
			thirdParty: {
				tcgplayer: 651100
			}
		},
		{
			type: "reverse",
			foil: "cosmos",
			stamp: ["professor-program"],
			thirdParty: {
				tcgplayer: 604498
			}
		}
	]


}

export default card
