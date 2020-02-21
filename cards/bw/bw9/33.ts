import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-33",
	localId: 33,

	// Card informations
	name: {
		en: "Electrode",
		fr: "Électrode",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 101,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/33/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/33/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/33/high",
		},
	},

	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 105,
		name: "HiRON"
	},

	abilities: [{
		id: 128,
		type: AbilityType.TALENT,
		name: {
			en: "Magnetic Draw",
			fr: "Pioche Magnétique",
		},
		text: {
			en: "Once during your turn (before your attack), you may draw cards until you have 4 cards in your hand.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher des cartes jusqu'à ce que vous ayez 4 cartes en main.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Electro Ball",
			fr: "Boule Élek",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
