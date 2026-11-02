import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Psychic Energy",
		fr: "Énergie Psy",
		es: "Energía Psíquica",
		it: "Energia Psiche",
		pt: "Energia Psíquica",
		de: "Psycho-Energie"
	},

	rarity: "Secret Rare",
	category: "Energy",
	energyType: "Normal",


	variants: [
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 567340,
				tcgplayer: 241879
			}
		},
	],
}

export default card
