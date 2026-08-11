import { Card } from '../../../interfaces'
import Set from '../Scarlet & Violet Energy'

const card: Card = {
    name: {
        en: "Grass Energy",
        fr: "Énergie Plante",
        es: "Energía Planta",
        it: "Energia Erba",
        pt: "Energia de Grama",
        de: "Pflanze-Energie"
    },

    rarity: "Common",
    category: "Energy",
    set: Set,
    energyType: "Normal",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 786113,
				tcgplayer: 578864
			}
		},
		{
			type: "reverse",
		},
		{
			type: "reverse",
			foil: "cracked-ice",
			thirdParty: {
				cardmarket: 809704,
				tcgplayer: 599740
			}
		},
		{
			type: "normal",
			stamp: ["player-rewards-program"],
			thirdParty: {
				tcgplayer: 623649
			}
		},
		{
			type: "reverse",
			foil: "cosmos",
			stamp: ["player-rewards-program"],
			thirdParty: {
				tcgplayer: 651098
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
