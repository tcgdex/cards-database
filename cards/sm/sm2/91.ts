import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-91",
	localId: 91,

	// Card informations
	name: {
		en: "Whimsicott",
		fr: "Farfaduvet",
	},

	hp: 80,

	type: [
		Type.FAIRY,
	],

	dexId: 547,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/91/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/91/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/91/high",
		},
	},

	evolveFrom: {
		en: "Cottonee",
		fr: "Doudouvet",
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
			Type.COLORLESS
		],
		name: {
			en: "The Wages of Fluff",
			fr: "Prix de la Douceur",
		},
		text: {
			en: "If the Defending Pokémon is Knocked Out during your next turn, take 2 more Prize cards.",
			fr: "Si le Pokémon Défenseur est mis K.O. pendant votre prochain tour, récupérez 2 cartes Récompense supplémentaires.",
		},
	},{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Fairy Wind",
			fr: "Vent Féérique",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
