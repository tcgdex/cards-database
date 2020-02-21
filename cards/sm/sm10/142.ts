import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-142",
	localId: 142,

	// Card informations
	name: {
		en: "Aromatisse",
		fr: "Cocotine",
	},

	hp: 90,

	type: [
		Type.FAIRY,
	],

	dexId: 683,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/142/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/142/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/142/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/142/high",
		},
	},

	evolveFrom: {
		en: "Spritzee",
		fr: "Fluvetin",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 62,
		name: "Saya Tsuruta"
	},



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Pungent Aroma",
			fr: "Arôme Âcre",
		},
		text: {
			en: "Flip 2 coins. If either of them is heads, your opponent reveals their hand. For each heads, choose a card you find there. Your opponent shuffles those cards into their deck.",
			fr: "Lancez 2 pièces. Si vous obtenez au moins un côté face, votre adversaire dévoile sa main. Pour chaque côté face, choisissez une carte que vous y trouvez. Votre adversaire mélange ces cartes avec son deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Miraculous Cologne",
			fr: "Parfum Miraculeux",
		},
		text: {
			en: "Flip a coin. If heads, choose a Special Condition. Your opponent's Active Pokémon is now affected by that Special Condition.",
			fr: "Lancez une pièce. Si c’est face, choisissez un État Spécial. Le Pokémon Actif de votre adversaire est maintenant affecté par cet État Spécial.",
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

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
