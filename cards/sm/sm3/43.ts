import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-43",
	localId: 43,

	// Card informations
	name: {
		en: "Electivire",
		fr: "Élekable",
	},

	hp: 140,

	type: [
		Type.LIGHTNING,
	],

	dexId: 466,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/43/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/43/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/43/high",
		},
	},

	evolveFrom: {
		en: "Electabuzz",
		fr: "Élektek",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Thunder Punch",
			fr: "Poing-Éclair",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 60 more damage. If tails, this Pokémon does 20 damage to itself.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 60 dégâts supplémentaires. Si c’est pile, ce Pokémon s’inflige 20 dégâts.",
		},
		damage: 60
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Giga Impact",
			fr: "Giga Impact",
		},
		text: {
			en: "This Pokémon can't attack during your next turn.",
			fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
		},
		damage: 170
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
