import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-59",
	localId: 59,

	// Card informations
	name: {
		en: "Lanturn",
		fr: "Lanturn",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 171,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/59/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/59/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/59/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/59/high.png",
		},
	},

	evolveFrom: {
		en: "Chinchou",
		fr: "Lampi",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Energy Split",
			fr: "Séparation d'Énergie",
		},
		text: {
			en: "This attack does 30 damage to each of your opponent's Pokémon that has any Energy cards attached to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts  à  chacun des Pokémon de votre adversaire possédant des cartes Énergie. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aqua Bolt",
			fr: "Aqua-boulon",
		},
		text: {
			en: "Does 60 damage plus 10 more damage for each Water Energy attached to Lanturn.",
			fr: "Inflige 60 dégâts plus 10 dégâts supplémentaires pour chaque Énergie Water attachée à Lanturn.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card

