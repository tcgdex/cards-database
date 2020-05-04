import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-111",
	localId: 111,

	// Card informations
	name: {
		en: "Talonflame",
		fr: "Flambusard",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 663,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/111/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/111/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/111/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/111/high",
		},
	},

	evolveFrom: {
		en: "Fletchinder",
		fr: "Braisillon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Flame Charge",
			fr: "Nitrocharge",
		},
		text: {
			en: "Search your deck for a Fire Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez une carte Énergie Fire dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Loop-the-Loop",
			fr: "Looping",
		},
		text: {
			en: "Put all Energy attached to this Pokémon into your hand.",
			fr: "Placez toutes les Énergies attachées à ce Pokémon dans votre main.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
