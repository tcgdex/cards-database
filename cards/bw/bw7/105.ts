import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-105",
	localId: 105,

	// Card informations
	name: {
		en: "Raticate",
		fr: "Rattatac",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 20,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/105/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/105/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/105/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/105/high",
		},
	},

	evolveFrom: {
		en: "Rattata",
		fr: "Rattata",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Gnaw Through",
			fr: "Grignotage",
		},
		text: {
			en: "Discard a Pokémon Tool card attached to the Defending Pokémon.",
			fr: "Défaussez une carte Outil Pokémon attachée au Pokémon Défenseur.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Super Fang",
			fr: "Croc Fatal",
		},
		text: {
			en: "Put damage counters on the Defending Pokémon until its remaining HP is 10.",
			fr: "Placez des marqueurs de dégâts sur le Pokémon Défenseur jusqu'à ce qu'il ait 10 PV.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
