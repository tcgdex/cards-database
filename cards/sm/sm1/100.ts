import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-100",
	localId: 100,

	// Card informations
	name: {
		en: "Tauros-GX",
		fr: "Tauros-GX",
	},

	hp: 180,

	type: [
		Type.COLORLESS,
	],

	dexId: 128,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/100/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/100/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/100/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/100/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rage",
			fr: "Frénésie",
		},
		text: {
			en: "This attack does 10 more damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Horn Attack",
			fr: "Koud'Korne",
		},
		damage: 60
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mad Bull-GX",
			fr: "Taureau Enragé-GX",
		},
		text: {
			en: "This attack does 30 damage for each damage counter on this Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Cette attaque inflige 30 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
