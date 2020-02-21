import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-112",
	localId: 112,

	// Card informations
	name: {
		en: "Pelipper",
		fr: "Bekipan",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 279,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/112/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/112/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/112/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/112/high",
		},
	},

	evolveFrom: {
		en: "Wingull",
		fr: "Goélise",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 49,
		name: "Shigenori Negishi"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Firefighting",
			fr: "Anti-Flammes",
		},
		text: {
			en: "Discard a Fire Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie Fire du Pokémon Actif de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Water Pulse",
			fr: "Vibraqua",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
