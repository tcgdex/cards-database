import { Card } from '../../../interfaces'
import Set from '../Scarlet & Violet Energy'

const card: Card = {
    name: {
        en: "Metal Energy",
        fr: "Énergie Métal",
        es: "Energía Metálica",
        it: "Energia Metallo",
        pt: "Energia de Metal",
        de: "Metall-Energie"
    },

    rarity: "Common",
    category: "Energy",
    set: Set,
    energyType: "Normal",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 689762,
				tcgplayer: 475432
			}
		},
		{
			type: "reverse",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 735373,
				tcgplayer: 517184
			}
		},
		{
			type: "normal",
			stamp: ["player-rewards-program"],
			thirdParty: {
				tcgplayer: 515642
			}
		},
		{
			type: "reverse",
			foil: "cosmos",
			stamp: ["player-rewards-program"],
			thirdParty: {
				tcgplayer: 622942
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 780810,
				tcgplayer: 562159
			}
		},
		{
			type: "reverse",
			foil: "cosmos",
			stamp: ["professor-program"],
			thirdParty: {
				tcgplayer: 599459
			}
		}
	]


}

export default card
