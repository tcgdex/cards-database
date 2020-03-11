import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-22",
	localId: 22,

	// Card informations
	name: {
		en: "Granbull",
		fr: "Granbull",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 210,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/22/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/22/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/22/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/22/high",
		},
	},

	evolveFrom: {
		en: "Snubbull",
		fr: "Snubbull",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Timid Tackle",
			fr: "Charge timide",
		},
		text: {
			en: "Granbull does 20 damage to itself. Switch Granbull with 1 of your Benched Pokémon.",
			fr: "Granbull s’inflige 20 dégâts. Échangez Granbull avec l’un des Pokémon de votre Banc.",
		},
		damage: 50
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Chomp",
			fr: "Mâche",
		},
		text: {
			en: "Does 40 damage plus 10 more damage for each damage counter on Granbull.",
			fr: "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégâts sur Granbull.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
