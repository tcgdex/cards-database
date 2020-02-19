import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-8",
	localId: 8,

	// Card informations
	name: {
		en: "Sceptile",
		fr: "Jungko",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 254,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/8/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/8/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/8/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/8/high.png",
		},
	},

	evolveFrom: {
		en: "Grovyle",
		fr: "Massko",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "X-Scissor",
			fr: "Plaie-Croix",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 40 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Energy Bloom",
			fr: "Énergie Florissante",
		},
		text: {
			en: "Heal 20 damage from each of your Pokémon that has any Energy attached to it.",
			fr: "Soignez 20 dégâts à chacun de vos Pokémon auquel de l'Énergie est attachée.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card

