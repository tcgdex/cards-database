import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-173",
	localId: 173,

	// Card informations
	name: {
		en: "Munchlax",
		fr: "Goinfrex",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 446,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/173/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/173/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/173/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/173/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 96,
		name: "sowsow"
	},

	abilities: [{
		id: 982,
		type: AbilityType.TALENT,
		name: {
			en: "Snack Search",
			fr: "Le Quatre-Heures",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, put a card from your discard pile on top of your deck. If you use this Ability, your turn ends.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, placez une carte de votre pile de défausse sur le dessus de votre deck. Si vous utilisez ce talent, votre tour se termine.",
		}
	}],









	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

