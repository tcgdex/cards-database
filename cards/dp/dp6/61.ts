import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-61",
	localId: 61,

	// Card informations
	name: {
		en: "Lucario",
		fr: "Lucario",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 448,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/61/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/61/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/61/high",
		},
	},

	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoyo Kimura",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Focus Blast",
			fr: "Exploforce",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Spike Lariat",
			fr: "Lasso à piques",
		},
		text: {
			en: "If the Defending Pokémon already has any damage counters on it, this attack does 60 damage plus 20 more damage.",
			fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, cette attaque inflige 60 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
