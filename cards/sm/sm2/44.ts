import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-44",
	localId: 44,

	// Card informations
	name: {
		en: "Heliolisk",
		fr: "Iguolta",
	},

	hp: 100,

	type: [
		Type.LIGHTNING,
	],

	dexId: 695,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/44/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/44/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/44/high",
		},
	},

	evolveFrom: {
		en: "Helioptile",
		fr: "Galvaran",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Quick Attack",
			fr: "Vive-Attaque",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Raging Thunder",
			fr: "Tonnerre Déchaîné",
		},
		text: {
			en: "This attack does 30 damage to 1 of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à l’un de vos Pokémon de Banc. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
