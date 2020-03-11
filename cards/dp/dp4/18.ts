import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-18",
	localId: 18,

	// Card informations
	name: {
		en: "Houndoom",
		fr: "Demolosse",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 229,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/18/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/18/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/18/high",
		},
	},

	evolveFrom: {
		en: "Houndour",
		fr: "Malosse",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Dark Fang",
			fr: "Croc obscurité",
		},
		text: {
			en: "Choose 1 card from your opponent's hand without looking and discard it.",
			fr: "Choisissez sans regarder 1 carte de la main de votre adversaire et défaussez-la.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Black Fire",
			fr: "Feu noir",
		},
		text: {
			en: "You may discard a Fire or Darkness Energy attached to Houndoom. If you discard a Fire Energy, the Defending Pokémon is now Burned. If you discard a Darkness Energy, this attack does 40 damage plus 30 more damage.",
			fr: "Vous pouvez défausser une Énergie Fire ou Darkness attachée à Demolosse. Si vous défaussez une Énergie Fire, le Pokémon Défenseur est maintenant Brûlé. Si vous défaussez une Énergie (D), cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
