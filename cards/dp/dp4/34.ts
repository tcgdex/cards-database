import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-34",
	localId: 34,

	// Card informations
	name: {
		en: "Cacturne",
		fr: "Cacturne",
	},

	hp: 80,

	type: [
		Type.DARKNESS,
	],

	dexId: 332,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/34/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/34/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/34/high",
		},
	},

	evolveFrom: {
		en: "Cacnea",
		fr: "Cacnea",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pin Missile",
			fr: "Dard-nuée",
		},
		text: {
			en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Needle Arm",
			fr: "Poing dard",
		},
		text: {
			en: "If the Defending Pokémon already has any damage counters on it, this attack does 50 damage plus 20 more damage.",
			fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
