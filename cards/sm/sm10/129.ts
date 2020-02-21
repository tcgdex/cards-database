import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-129",
	localId: 129,

	// Card informations
	name: {
		en: "Melmetal",
		fr: "Melmetal",
	},

	hp: 150,

	type: [
		Type.METAL,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/129/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/129/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/129/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/129/high",
		},
	},

	evolveFrom: {
		en: "Meltan",
		fr: "Meltan",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 484,
		type: AbilityType.TALENT,
		name: {
			en: "Metal Eater",
			fr: "Mange Métal",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard a Metal Pokémon from your hand. If you do, heal 100 damage from this Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser un Pokémon Metal de votre main. Dans ce cas, soignez 100 dégâts à ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heavy Impact",
			fr: "Gros Impact",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
