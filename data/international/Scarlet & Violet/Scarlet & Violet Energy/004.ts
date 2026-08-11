import { Card } from '../../../interfaces'
import Set from '../Scarlet & Violet Energy'

const card: Card = {
    name: {
        en: "Lightning Energy",
        fr: "Énergie Electrik",
        es: "Energía Rayo",
        it: "Energia Lampo",
        pt: "Energia de Raios",
        de: "Elektro-Energie"
    },

    rarity: "Common",
    category: "Energy",
    set: Set,
    energyType: "Normal",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 689755,
				tcgplayer: 475428
			}
		},
		{
			type: "reverse",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 735368,
				tcgplayer: 517180
			}
		},
		{
			type: "normal",
			stamp: ["player-rewards-program"],
			thirdParty: {
				tcgplayer: 515641
			}
		},
		{
			type: "reverse",
			foil: "cosmos",
			stamp: ["player-rewards-program"],
			thirdParty: {
				tcgplayer: 622938
			}
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 780808,
				tcgplayer: 562152
			}
		},
		{
			type: "reverse",
			foil: "cosmos",
			stamp: ["professor-program"],
			thirdParty: {
				tcgplayer: 599456
			}
		}
	]


}

export default card
