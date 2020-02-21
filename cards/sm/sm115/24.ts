import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm115-24",
	localId: 24,

	// Card informations
	name: {
		en: "Zapdos",
		fr: "Électhor",
	},

	hp: 120,

	type: [
		Type.LIGHTNING,
	],

	dexId: 145,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm115/24/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm115/24/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm115/24/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hurricane Call",
			fr: "Appel à l’Ouragan",
		},
		text: {
			en: "Flip 4 coins. For each heads, search your deck for a Lightning Energy card and attach it to 1 of your Pokémon-GX or Pokémon-EX. Then, shuffle your deck.",
			fr: "Lancez 4 pièces. Pour chaque côté face, cherchez une carte Énergie Lightning dans votre deck et attachez-la à l’un de vos Pokémon-GX ou Pokémon-EX. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Sky-High Claws",
			fr: "Griffes Gratte-Ciel",
		},
		damage: 100
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

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Hidden Fates",
		code: "sm115"
	}
}

export default card
