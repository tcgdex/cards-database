import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "g1-RC16",
	localId: "RC16",

	// Card informations
	name: {
		en: "Yveltal",
		fr: "Yveltal",
	},

	hp: 130,

	type: [
		Type.DARKNESS,
	],

	dexId: 717,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC16/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC16/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC16/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Saya Tsuruta",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Oblivion Wing",
			fr: "Mort-Ailes",
		},
		text: {
			en: "Attach a Darkness Energy card from your discard pile to 1 of your Benched Pokémon.",
			fr: "Attachez une carte Énergie Darkness de votre pile de défausse à l'un de vos Pokémon de Banc.",
		},
		damage: 30
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Darkness Blade",
			fr: "Lame Obscure",
		},
		text: {
			en: "Flip a coin. If tails, this Pokémon can't attack during your next turn.",
			fr: "Lancez une pièce. Si c'est pile, ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
