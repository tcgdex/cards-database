import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-82",
	localId: 82,

	// Card informations
	name: {
		en: "Probopass",
		fr: "Tarinorme",
	},

	hp: 110,

	type: [
		Type.METAL,
	],

	dexId: 476,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/82/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/82/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/82/high",
		},
	},

	evolveFrom: {
		en: "Nosepass",
		fr: "Tarinor",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "match",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Magnetic Lines",
			fr: "Lignes Magnétiques",
		},
		text: {
			en: "You may move an Energy attached to the Defending Pokémon to 1 of your opponent's Benched Pokémon.",
			fr: "Vous pouvez déplacer une Énergie attachée au Pokémon Défenseur vers 1 des Pokémon de Banc de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heavy Nose",
			fr: "Pif Paf",
		},
		text: {
			en: "If the Defending Pokémon already has any damage counters on it, this attack does 30 more damage.",
			fr: "Si le Pokémon Défenseur a déjà des marqueurs de dégâts, cette attaque inflige 30 dégâts supplémentaires.",
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

	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
