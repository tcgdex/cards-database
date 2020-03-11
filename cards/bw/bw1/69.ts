import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-69",
	localId: 69,

	// Card informations
	name: {
		en: "Scrafty",
		fr: "Baggaïd",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 560,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/69/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/69/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/69/high",
		},
	},

	evolveFrom: {
		en: "Scraggy",
		fr: "Baggiguane",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Spit Acid",
			fr: "Crachat d’Acide",
		},
		text: {
			en: "The Defending Pokémon is now Burned. Flip a coin. If heads, the Defending Pokémon is also Paralyzed.",
			fr: "Le Pokémon Défenseur est maintenant Brûlé. Lancez une pièce. Si c’est face, le Pokémon Défenseur est aussi Paralysé.",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "High Jump Kick",
			fr: "Pied Voltige",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
