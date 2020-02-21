import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-107",
	localId: 107,

	// Card informations
	name: {
		en: "Noctowl",
		fr: "Noarfang",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 164,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/107/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/107/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/107/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/107/high",
		},
	},

	evolveFrom: {
		en: "Hoothoot",
		fr: "Hoothoot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 89,
		name: "Sekio"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Hypnoblast",
			fr: "Hypnoblast",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Night Raid",
			fr: "Raid Nocturne",
		},
		text: {
			en: "Your opponent reveals their hand. Discard a Pokémon from it.",
			fr: "Votre adversaire dévoile sa main. Défaussez-en un Pokémon.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
