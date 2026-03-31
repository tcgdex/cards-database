import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Growing Grass Energy",
		fr: "Énergie Plante Croissante",
		es: "Energía Planta Creciente",
		de: "Wachsende Pflanzen-Energie",
		it: "Energia Erba Rigogliosa",
		pt: "Energia Grama Crescente"
	},
	set: Set,
	rarity: "Rare",
	category: "Energy",
	regulationMark: "J",
	effect: {
		fr: "Tant que cette carte est attachée à un Pokémon, elle fournit une Énergie Plante."
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
		tcgplayer: 684375,
		cardmarket: 877503
	}
}

export default card
