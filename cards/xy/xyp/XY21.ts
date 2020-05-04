import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY21",
	localId: "XY21",

	// Card informations
	name: {
		en: "Bronzong",
		fr: "Archéodong",
	},

	hp: 90,

	type: [
		Type.METAL,
	],

	dexId: 437,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY21/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY21/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY21/high",
		},
	},

	evolveFrom: {
		en: "Bronzor",
		fr: "Archéomire",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "match",

	abilities: [{
		id: 1137,
		type: AbilityType.TALENT,
		name: {
			en: "Metal Links",
			fr: "Liens Métalliques",
		},
		text: {
			en: "Once during your turn (before your attack), you may attach a Metal Energy card from your discard pile to 1 of your Benched Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Metal de votre pile de défausse à l'un de vos Pokémon de Banc.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Hammer In",
			fr: "Enfoncement",
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

	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
