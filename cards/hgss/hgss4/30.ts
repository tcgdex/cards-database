import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-30",
	localId: 30,

	// Card informations
	name: {
		en: "Sharpedo",
		fr: "Sharpedo",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 319,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/30/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/30/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/30/high",
		},
	},

	evolveFrom: {
		en: "Carvanha",
		fr: "Carvanha",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "MAHOU",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Strip Bare",
			fr: "Croktou",
		},
		text: {
			en: "Flip 2 coins. If both of them are heads, your opponent discards all cards from his or her hand.",
			fr: "Lancez 2 pièces. Si vous obtenez deux fois un côté face, votre adversaire défausse toutes les cartes de sa main.",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rage",
			fr: "Frénésie",
		},
		text: {
			en: "Does 50 damage plus 10 more damage for each damage counter on Sharpedo.",
			fr: "Inflige 50 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât placé sur Sharpedo.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
