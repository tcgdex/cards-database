import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Rocky Fighting Energy",
		fr: "Énergie Combat Rocheuse",
		es: "Energía Lucha Rocosa",
		de: "Steinharte Kampf-Energie",
		it: "Energia Lotta Rocciosa",
		pt: "Energia Luta Rochosa"
	},
	set: Set,
	rarity: "Rare",
	category: "Energy",
	regulationMark: "J",
	effect: {
		fr: "Tant que cette carte est attachée à un Pokémon, elle fournit une Énergie Combat."
	},
	variants: [
		{
			type: "reverse"
		},
		{
			type: "holo"
		}
	],
	thirdParty: {
		tcgplayer: 684350,
		cardmarket: 877504
	}
}

export default card
