import { Card } from "../../../interfaces"
import Set from "../Shrouded Fable"

const card: Card = {
	set: Set,

	name: {
		en: "Basic Darkness Energy",
		fr: "Énergie Darkness de base",
		es: "Energía Darkness Básica",
		it: "Energia base Darkness",
		pt: "Energia Darkness Básica",
		de: "Basis-Darkness-Energie"
	},

	rarity: "Hyper rare",
	category: "Energy",
	types: ["Darkness"],
	energyType: "Normal",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				tcgplayer: 560409
			}
		},
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 780993
			}
		},
	],
}

export default card
