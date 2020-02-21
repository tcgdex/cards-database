import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-20",
	localId: 20,

	// Card informations
	name: {
		en: "Bibarel",
		fr: "Castorno",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 400,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/20/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/20/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/20/high",
		},
	},

	evolveFrom: {
		en: "Bidoof",
		fr: "Keunotor",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Rest",
			fr: "Repos",
		},
		text: {
			en: "Remove all Special Conditions and 4 damage counters from Bibarel. Bibarel is now Asleep.",
			fr: "Retirez à Castorno tous ses États Spéciaux ainsi que 4 marqueurs de dégât. Castorno est maintenant Endormi.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Take Down",
			fr: "Bélier",
		},
		text: {
			en: "Bibarel does 10 damage to itself.",
			fr: "Castorno s'inflige 10 dégâts.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
