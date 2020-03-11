import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-28",
	localId: 28,

	// Card informations
	name: {
		en: "Talonflame",
		fr: "Flambusard",
	},

	hp: 130,

	type: [
		Type.FIRE,
	],

	dexId: 663,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/28/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/28/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/28/high",
		},
	},

	evolveFrom: {
		en: "Fletchinder",
		fr: "Braisillon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Devastating Wind",
			fr: "Vent Dévastateur",
		},
		text: {
			en: "Your opponent shuffles his or her hand into his or her deck and draws 4 cards.",
			fr: "Votre adversaire mélange sa main avec son deck et pioche 4 cartes.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Flare Blitz",
			fr: "Boutefeu",
		},
		text: {
			en: "Discard all Fire Energy attached to this Pokémon.",
			fr: "Défaussez toutes les Énergies Fire attachées à ce Pokémon.",
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



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
