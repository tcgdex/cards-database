import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2016'

const card: Card = {
	set: Set,
	illustrator: "Akira Komayama",
	category: "Pokemon",

	description: {
		en: "In the distant past, it was somewhat stronger than the horribly weak descendants that exist today."
	},
	
	hp: 30,

	stage: "Basic",

	attacks: [{
		name: {
			en: "Epic Splash",
			fr: "Trempette Épique"
		},

		damage: 30,

		effect: {
			en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
			fr: "Lancez 2 pièces. Si vous obtenez au moins un côté pile, cette attaque ne fait rien."
		}
	}],

	name: {
		en: "Magikarp",
		fr: "Magicarpe"
	},

	rarity: "None",

	thirdParty: {
		tcgplayer: 275060
	}
}

export default card