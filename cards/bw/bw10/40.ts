import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-40",
	localId: 40,

	// Card informations
	name: {
		en: "Musharna",
		fr: "Mushana",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 518,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/40/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/40/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/40/high",
		},
	},

	evolveFrom: {
		en: "Munna",
		fr: "Munna",
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
			en: "Precognitive Dream",
			fr: "Rêve Prémonitoire",
		},
		text: {
			en: "Draw 3 cards. This Pokémon is now Asleep.",
			fr: "Piochez 3 cartes. Ce Pokémon est maintenant Endormi.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psybeam",
			fr: "Rafale Psy",
		},
		text: {
			en: "The Defending Pokémon is now Confused.",
			fr: "Le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
