import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-77",
	localId: 77,

	// Card informations
	name: {
		en: "Wynaut",
		fr: "Okéoké",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 360,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/77/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/77/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/77/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 908,
		type: AbilityType.TALENT,
		name: {
			en: "Peppy Pick",
			fr: "Choisillon",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into their deck. If you use this Ability, your turn ends.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, choisissez une carte au hasard de la main de votre adversaire. Votre adversaire montre la carte choisie et la mélange avec son deck. Si vous utilisez ce talent, votre tour se termine.",
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
