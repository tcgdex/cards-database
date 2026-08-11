import { Card } from "../../../interfaces"
import Set from "../Shrouded Fable"

const card: Card = {
	set: Set,

	name: {
		en: "Basic Metal Energy",
		fr: "Énergie Metal de base",
		es: "Energía Metal Básica",
		it: "Energia base Metal",
		pt: "Energia Metal Básica",
		de: "Basis-Metal-Energie"
	},

	rarity: "Hyper rare",
	category: "Energy",
	types: ["Metal"],
	energyType: "Normal",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				tcgplayer: 560410
			}
		},
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 780994
			}
		},
	],
}

export default card
