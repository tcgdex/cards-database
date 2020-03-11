import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-40",
	localId: 40,

	// Card informations
	name: {
		en: "Manectric",
		fr: "Élecsprint",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 310,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/40/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/40/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/40/high",
		},
	},

	evolveFrom: {
		en: "Electrike",
		fr: "Dynavolt",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Daisuke Ito",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Thunder Wave",
			fr: "Cage-éclair",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Volt Crush",
			fr: "Écras'volt",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to Manectric and this attack does 40 damage plus 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée à Elecsprint et cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
