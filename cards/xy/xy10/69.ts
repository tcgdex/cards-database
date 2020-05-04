import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-69",
	localId: 69,

	// Card informations
	name: {
		en: "M Altaria-EX",
		fr: "M-Altaria-EX",
	},

	hp: 220,

	type: [
		Type.FAIRY,
	],

	dexId: 334,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/69/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/69/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/69/high",
		},
	},

	evolveFrom: {
		en: "Altaria-EX",
		fr: "Altaria-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mist Purge",
			fr: "Nettoyage Brumeux",
		},
		text: {
			en: "If this Pokémon has any Special Energy attached to it, this attack does 30 more damage and heal 30 damage from each of your Pokémon.",
			fr: "Si de l'Énergie spéciale est attachée à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires et soigne 30 dégâts à chacun de vos Pokémon.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
