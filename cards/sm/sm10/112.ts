import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-112",
	localId: 112,

	// Card informations
	name: {
		en: "Spiritomb",
		fr: "Spiritomb",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 442,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/112/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/112/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/112/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/112/high",
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
		id: 467,
		type: AbilityType.TALENT,
		name: {
			en: "Building Spite",
			fr: "Mépris Grandissant",
		},
		text: {
			en: "Once during your turn (before your attack), you may put 1 damage counter on this Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer un marqueur de dégâts sur ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Anguish Cry",
			fr: "Cri Angoissé",
		},
		text: {
			en: "This attack does 30 more damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
		},
		damage: 10
	}],





	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
