import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-76",
	localId: 76,

	// Card informations
	name: {
		en: "Aerodactyl",
		fr: "Ptéra",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 142,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/76/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/76/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/76/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.RESTORED,
	],

	illustrator: "kawayoo",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Jet Draft",
			fr: "Souffle Supersonique",
		},
		text: {
			en: "Discard a Special Energy attached to your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie spéciale attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
