import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-59",
	localId: 59,

	// Card informations
	name: {
		en: "Wormadam",
		fr: "Cheniselle",
	},

	hp: 100,

	type: [
		Type.METAL,
	],

	dexId: 413,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/59/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/59/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/59/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/59/high",
		},
	},

	evolveFrom: {
		en: "Burmy",
		fr: "Cheniti",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Strike Back",
			fr: "Vengeur",
		},
		text: {
			en: "This attack does 20 damage times the number of damage counters on this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de marqueurs de dégâts placés sur ce Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Iron Head",
			fr: "Tête de Fer",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 20 more damage for each heads.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
