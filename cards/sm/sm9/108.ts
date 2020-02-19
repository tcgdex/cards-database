import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-108",
	localId: 108,

	// Card informations
	name: {
		en: "Doublade",
		fr: "Dimoclès",
	},

	hp: 90,

	type: [
		Type.METAL,
	],

	dexId: 680,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/108/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/108/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/108/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/108/high.png",
		},
	},

	evolveFrom: {
		en: "Honedge",
		fr: "Monorpale",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tool Drop",
			fr: "Chute d’Outils",
		},
		text: {
			en: "This attack does 30 damage for each Pokémon Tool card attached to all Pokémon.",
			fr: "Cette attaque inflige 30 dégâts pour chaque carte Outil Pokémon attachée aux Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card

