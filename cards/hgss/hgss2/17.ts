import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-17",
	localId: 17,

	// Card informations
	name: {
		en: "Kingdra",
		fr: "Hyporoi",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 230,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/17/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/17/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/17/high",
		},
	},

	evolveFrom: {
		en: "Seadra",
		fr: "Hypocean",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Water Arrow",
			fr: "Flèche d'eau",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez l'un des Pokémon de votre adversaire. Cette attaque inflige 30 dégâts à ce Pokémon. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Stream Pump",
			fr: "Pompe à eau",
		},
		text: {
			en: "You may do 50 damage plus 30 more damage. If you do, return an Energy card attached to Kingdra to your hand.",
			fr: "Vous pouvez infliger 50 dégâts plus 30 dégâts supplémentaires. Dans ce cas, récupérez dans votre main une carte Énergie attachée à Hyporoi.",
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
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
