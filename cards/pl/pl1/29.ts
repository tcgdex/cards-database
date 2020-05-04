import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-29",
	localId: 29,

	// Card informations
	name: {
		en: "Golduck",
		fr: "Akwakwak",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 55,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/29/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/29/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/29/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/29/high",
		},
	},

	evolveFrom: {
		en: "Psyduck",
		fr: "Psykokwak",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		name: {
			en: "Swim",
			fr: "Nager",
		},
		text: {
			en: "If your opponent has any Water Energy attached to any of his or her Pokémon, you may do 30 damage to any 1 Benched Pokémon instead. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Si les Pokémon de votre adversaire possèdent de l'Énergie Water, vous pouvez infliger 30 dégâts à n'importe lequel des Pokémon de Banc. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Water Slide",
			fr: "Toboggan d'O",
		},
		text: {
			en: "You may move all Energy cards attached to Golduck to 1 of your Benched Pokémon. If you do, this attack does 40 damage plus 20 more damage.",
			fr: "Vous pouvez déplacer toutes les cartes Énergie attachées à Akwakwak sur 1 de vos Pokémon de Banc. Cette attaque inflige alors 40 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
