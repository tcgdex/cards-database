import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-73",
	localId: 73,

	// Card informations
	name: {
		en: "Donphan",
		fr: "Donphan",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 232,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/73/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/73/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/73/high",
		},
	},

	evolveFrom: {
		en: "Phanpy",
		fr: "Phanpy",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Flail",
			fr: "Fléau",
		},
		text: {
			en: "This attack does 10 damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon.",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rapid Spin",
			fr: "Tour Rapide",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon. If you do, your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
			fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc. Dans ce cas, votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
