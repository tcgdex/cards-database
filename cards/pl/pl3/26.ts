import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-26",
	localId: 26,

	// Card informations
	name: {
		en: "Dusknoir FB",
		fr: "Noctunoir ",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 477,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/26/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/26/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/26/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 114,
		name: "Motofumi Fujiwara"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Ghost Hand",
			fr: "Main fantôme",
		},
		text: {
			en: "Put 1 damage counter on 1 of your Benched Pokémon.",
			fr: "Placez 1 marqueur de dégât sur 1 de vos Pokémon de Banc.",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cursed Wrath",
			fr: "Colère ensorcelée",
		},
		text: {
			en: "Does 10 damage times the number of Pokémon SP in your discard pile.",
			fr: "Inflige 10 dégâts multipliés par le nombre de Pokémon SP dans votre pile de défausse.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
