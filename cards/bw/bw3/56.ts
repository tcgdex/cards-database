import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-56",
	localId: 56,

	// Card informations
	name: {
		en: "Beheeyem",
		fr: "Neitram",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 606,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/56/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/56/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/56/high",
		},
	},

	evolveFrom: {
		en: "Elgyem",
		fr: "Lewsor",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Synchronoise",
			fr: "Synchropeine",
		},
		text: {
			en: "Does 20 damage to each of your opponent's Benched Pokémon that shares a type with the Defending Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire ayant un type en commun avec le Pokémon Défenseur.  (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psyshot",
			fr: "Piqûre Psy",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
