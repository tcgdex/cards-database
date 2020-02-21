import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-7",
	localId: 7,

	// Card informations
	name: {
		en: "Grovyle",
		fr: "Massko",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 253,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/7/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/7/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/7/high",
		},
	},

	evolveFrom: {
		en: "Treecko",
		fr: "Arcko",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 28,
		name: "match"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Pound",
			fr: "Écras'Face",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Agility",
			fr: "Hâte",
		},
		text: {
			en: "Flip a coin. If heads, prevent all effects of attacks, including damage, done to this Pokémon during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est face, évitez tous les effets d'attaques, y compris les dégâts, infligés à ce Pokémon pendant le prochain tour de votre adversaire.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
