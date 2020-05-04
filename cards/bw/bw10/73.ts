import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-73",
	localId: 73,

	// Card informations
	name: {
		en: "Porygon2",
		fr: "Porygon2",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 233,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/73/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/73/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/73/high",
		},
	},

	evolveFrom: {
		en: "Porygon",
		fr: "Porygon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "HiRON",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Destructive Beam",
			fr: "Rayon Désintégrateur",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Défenseur.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
