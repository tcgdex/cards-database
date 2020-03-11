import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-52",
	localId: 52,

	// Card informations
	name: {
		en: "Dusclops",
		fr: "Téraclope",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 356,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/52/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/52/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/52/high",
		},
	},

	evolveFrom: {
		en: "Duskull",
		fr: "Skelénox",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "SATOSHI NAKAI",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Night Roam",
			fr: "Errance Nocturne",
		},
		text: {
			en: "Put 1 damage counter on each Pokémon (both yours and your opponent's).",
			fr: "Placez 1 marqueur de dégâts sur chaque Pokémon (les vôtres et ceux de votre adversaire).",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ambush",
			fr: "Embuscade",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
