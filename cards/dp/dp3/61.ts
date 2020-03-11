import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-61",
	localId: 61,

	// Card informations
	name: {
		en: "Raticate",
		fr: "Rattatac",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 20,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/61/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/61/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/61/high",
		},
	},

	evolveFrom: {
		en: "Rattata",
		fr: "Rattata",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Gnaw Off",
			fr: "Ronger jusqu'au bout",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 60 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 60 dégâts supplémentaires.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sucker Punch",
			fr: "Coup Bas",
		},
		text: {
			en: "If Raticate has any Darkness Energy attached to it, this attack does 20 damage plus 20 more damage.",
			fr: "Si Rattatac possède de l'Énergie Darkness, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
