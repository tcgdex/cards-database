import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM100",
	localId: "SM100",

	// Card informations
	name: {
		en: "Lucario-GX",
		fr: "Lucario-GX",
	},

	hp: 210,

	type: [
		Type.FIGHTING,
	],

	dexId: 448,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM100/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM100/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM100/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM100/high",
		},
	},

	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Aura Strike",
			fr: "Aura Frappante",
		},
		text: {
			en: "If this Pokémon evolved from Riolu during this turn, this attack does 90 more damage.",
			fr: "Si ce Pokémon a évolué de Riolu pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Cyclone Kick",
			fr: "Pied Cyclone",
		},
		damage: 130
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cantankerous Beatdown-GX",
			fr: "Dérouillée Revêche-GX",
		},
		text: {
			en: "This attack does 30 damage for each damage counter on this Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Cette attaque inflige 30 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
