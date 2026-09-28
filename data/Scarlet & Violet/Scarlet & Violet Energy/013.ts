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
				cardmarket: 786117,
				tcgplayer: 578865
			}
		},
		{
			type: "reverse",
			foil: "cracked-ice",
			thirdParty: {
				cardmarket: 809708,
				tcgplayer: 599743
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 786117,
				tcgplayer: 578865
			}
		},
		{
			type: "normal",
			stamp: ["player-rewards-program"],
			thirdParty: {
				tcgplayer: 623653
			}
		},
		{
			type: "reverse",
			foil: "cosmos",
			stamp: ["player-rewards-program"],
			thirdParty: {
				tcgplayer: 651109
			}
		},
		{
			type: "reverse",
			foil: "cosmos",
			stamp: ["professor-program"],
			thirdParty: {
				tcgplayer: 604497
			}
		}
	]


}

export default card
