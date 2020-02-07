import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-69",
	localId: 69,

	// Card informations
	name: {
		en: "Lanturn",
		fr: "Lanturn",
	},

	hp: 120,

	type: [
		Type.LIGHTNING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/69/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/69/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/69/high.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/69/high.png",
		},
	},

	evolveFrom: {
		en: "Chinchou",
		fr: "Loupio",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Strobe Shock",
			fr: "Strobochoc",
		},
		text: {
			en: "Your opponent reveals their hand. If you find any Energy cards there, your opponent’s Active Pokémon is now Paralyzed.",
			fr: "Votre adversaire dévoile sa main. Si vous y trouvez au moins une carte Énergie, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "undefined",
		code: "swsh1"
	}
}

export default card

