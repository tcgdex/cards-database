import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2016'

const card: Card = {
	set: Set,
	illustrator: "Kouki Saitou",
	category: "Pokemon",

	description: {
		en: "Thanks to its unstable genetic makeup, this special Pokémon conceals many different possible evolutions."
	},
	
	hp: 60,

	stage: "Basic",

	attacks: [{
		name: {
			en: "Tackle",
			fr: "Charge"
		},

		damage: 10
	}, {
		name: {
			en: "Lunge",
			fr: "Coup Rapide"
		},

		damage: 30,

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien."
		}
	}],

	name: {
		en: "Eevee",
		fr: "Évoli"
	},

	rarity: "None",

	thirdParty: {
		tcgplayer: 275069
	}
}

export default card