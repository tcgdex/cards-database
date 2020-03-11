import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-34",
	localId: 34,

	// Card informations
	name: {
		en: "Galvantula",
		fr: "Mygavolt",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 596,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/34/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/34/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/34/high",
		},
	},

	evolveFrom: {
		en: "Joltik",
		fr: "Statitik",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Gnaw",
			fr: "Ronge",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Stun Needle",
			fr: "Para-Dard",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
