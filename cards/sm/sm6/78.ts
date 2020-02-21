import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-78",
	localId: 78,

	// Card informations
	name: {
		en: "Pangoro",
		fr: "Pandarbare",
	},

	hp: 130,

	type: [
		Type.DARKNESS,
	],

	dexId: 675,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/78/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/78/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/78/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/78/high",
		},
	},

	evolveFrom: {
		en: "Pancham",
		fr: "Pandespiègle",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 102,
		name: "SATOSHI NAKAI"
	},



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Untamed Punch",
			fr: "Frappe Sauvage",
		},
		text: {
			en: "If this Pokémon has any damage counters on it, this attack does 50 more damage, and both Active Pokémon are now Confused.",
			fr: "Si des marqueurs de dégâts sont placés sur ce Pokémon, cette attaque inflige 50 dégâts supplémentaires, et les deux Pokémon Actifs sont maintenant Confus.",
		},
		damage: 50
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Stomp",
			fr: "Double Écrasement",
		},
		text: {
			en: "Flip 2 coins. This attack does 40 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 40 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
