import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Telepathic Psychic Energy",
		fr: "Énergie Psy Télépathique",
		es: "Energía Psíquica Telepática",
		de: "Telepathische Psycho-Energie",
		it: "Energia Psico Telepatica",
		pt: "Energia Psíquico Telepática"
	},
	set: Set,
	rarity: "Rare",
	category: "Energy",
	regulationMark: "J",
	effect: {
		fr: "Tant que cette carte est attachée à un Pokémon, elle fournit une Énergie Psy."
	},
	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	],
	thirdParty: {
		tcgplayer: 684396,
		cardmarket: 877505
	}
}

export default card
