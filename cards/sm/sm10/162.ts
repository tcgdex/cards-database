import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-162",
	localId: 162,

	// Card informations
	name: {
		en: "Chatot",
		fr: "Pijako",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 441,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/162/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/162/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/162/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/162/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 92,
		name: "HYOGONOSUKE"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Mimic",
			fr: "Copie",
		},
		text: {
			en: "Shuffle your hand into your deck. Then, draw a card for each card in your opponent's hand.",
			fr: "Mélangez votre main avec votre deck. Ensuite, piochez une carte pour chaque carte dans la main de votre adversaire.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tone-Deaf",
			fr: "Dur d’Oreille",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 10
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
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card

