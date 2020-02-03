import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-131",
	localId: 131,

	// Card informations
	name: {
		en: "Cleffa",
		fr: "Mélo",
	},

	hp: 60,

	type: [
		Type.FAIRY,
	],

	dexId: 173,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/131/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/131/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/131/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/131/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 132,
		name: "Shibuzoh."
	},

	abilities: [{
		id: 487,
		type: AbilityType.TALENT,
		name: {
			en: "Excitable Draw",
			fr: "Pioche Émotive",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, shuffle your hand into your deck and then draw 6 cards. If you use this Ability, your turn ends.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, mélangez votre main avec votre deck, puis piochez 6 cartes. Si vous utilisez ce talent, votre tour se termine.",
		}
	}],









	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card

