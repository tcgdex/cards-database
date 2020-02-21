import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-12",
	localId: 12,

	// Card informations
	name: {
		en: "Beedrill",
		fr: "Dardargnan",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 15,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/12/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/12/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/12/high",
		},
	},

	evolveFrom: {
		en: "Kakuna",
		fr: "Coconfort",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Twineedle",
			fr: "Double-dard",
		},
		text: {
			en: "Flip 2 coins. This attack does 50 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 50
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Paralyze Poison",
			fr: "Poison paralysant",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned. Flip a coin. If heads, the Defending Pokémon is also Paralyzed.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné. Lancez une pièce. Si c'est face, le Pokémon Défenseur est aussi Paralysé.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
