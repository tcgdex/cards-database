import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-87",
	localId: 87,

	// Card informations
	name: {
		en: "Sylveon",
		fr: "Nymphali",
	},

	hp: 90,

	type: [
		Type.FAIRY,
	],

	dexId: 700,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/87/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/87/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/87/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 112,
		name: "0313"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Wink Wink",
			fr: "Clin d’Œil",
		},
		text: {
			en: "Your opponent reveals their hand. You may discard a Supporter card you find there and use the effect of that card as the effect of this attack.",
			fr: "Votre adversaire dévoile sa main. Vous pouvez défausser une carte Supporter que vous y trouvez et utiliser l’effet de la carte défaussée en tant qu’effet de cette attaque.",
		},
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Magical Shot",
			fr: "Coup Magique",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
