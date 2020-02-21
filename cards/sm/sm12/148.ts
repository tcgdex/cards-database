import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-148",
	localId: 148,

	// Card informations
	name: {
		en: "Whimsicott",
		fr: "Farfaduvet",
	},

	hp: 70,

	type: [
		Type.FAIRY,
	],

	dexId: 547,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/148/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/148/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/148/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/148/high",
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
		id: 58,
		name: "Yumi"
	},



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Sneaky Pocket",
			fr: "Poche Cachée",
		},
		text: {
			en: "Put a card from your hand in the Lost Zone. If you do, draw 3 cards.",
			fr: "Placez une carte de votre main dans la Zone Perdue. Dans ce cas, piochez 3 cartes.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Lost March",
			fr: "Marche Perdue",
		},
		text: {
			en: "This attack does 20 damage for each of your Pokémon, except ◇ (Prism Star) Pokémon, in the Lost Zone.",
			fr: "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon dans la Zone Perdue, à l’exception des Pokémon  (Prisme Étoile).",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
