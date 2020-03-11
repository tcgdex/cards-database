import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-12",
	localId: 12,

	// Card informations
	name: {
		en: "Accelgor",
		fr: "Limaspeed",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 617,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/12/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/12/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/12/high",
		},
	},

	evolveFrom: {
		en: "Shelmet",
		fr: "Escargaume",
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
			en: "Acid Spray",
			fr: "Bombe Acide",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Défenseur.",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Slashing Strike",
			fr: "Coup Déchirant",
		},
		text: {
			en: "This Pokémon can't use Slashing Strike during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Coup Déchirant pendant votre prochain tour.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
