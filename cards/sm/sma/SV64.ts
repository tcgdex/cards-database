import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV64",
	localId: "SV64",

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
			en: "https://assets.tcgdex.net/en/sm/sma/SV64/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV64/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV64/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV64/high.png",
		},
	},

	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



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
			fr: "Cette attaque inflige 30 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
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
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card

