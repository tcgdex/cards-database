import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-52",
	localId: 52,

	// Card informations
	name: {
		en: "Slowbro",
		fr: "Flagadoss",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 80,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/52/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/52/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/52/high",
		},
	},

	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sumiyoshi Kizuki",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Big Yawn",
			fr: "Gros bâillement",
		},
		text: {
			en: "Both Slowbro and the Defending Pokémon are now Asleep.",
			fr: "Flagadoss et le Pokémon Défenseur sont maintenant Endormis.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Madkinesis",
			fr: "Mentalisme",
		},
		text: {
			en: "Does 30 damage plus 20 more damage for each Psychic Energy attached to Slowbro.",
			fr: "Inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque carte Énergie Psychic attachée à Flagadoss.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
