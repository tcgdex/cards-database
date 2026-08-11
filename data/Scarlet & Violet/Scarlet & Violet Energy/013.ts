import { Card } from '../../../interfaces'
import Set from '../Scarlet & Violet Energy'

const card: Card = {
    name: {
        en: "Psychic Energy",
        fr: "Énergie Psy",
        es: "Energía Psíquica",
        it: "Energia Psico",
        pt: "Energia Psíquica",
        de: "Psycho-Energie"
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
			type: "reverse"
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
		}
	]


}

export default card
