import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-55",
	localId: 55,

	// Card informations
	name: {
		en: "Raichu",
		fr: "Raichu",
	},

	hp: 120,

	type: [
		Type.LIGHTNING,
	],

	dexId: 26,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/55/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/55/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/55/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/55/high.png",
		},
	},

	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Never Give Up",
			fr: "Persistance",
		},
		text: {
			en: "You can use this attack only if you have at least 3 more Prize cards remaining than your opponent. Attach all Lightning Energy cards from your discard pile to your Pokémon in any way you like.",
			fr: "Vous ne pouvez utiliser cette attaque que s’il vous reste au moins 3 cartes Récompense de plus qu’à votre adversaire. Attachez toutes les cartes Énergie Lightning de votre pile de défausse à vos Pokémon, de la manière que vous voulez.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Head Bolt",
			fr: "Éclair Frontal",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card

