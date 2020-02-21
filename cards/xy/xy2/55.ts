import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-55",
	localId: 55,

	// Card informations
	name: {
		en: "Skuntank",
		fr: "Moufflair",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 435,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/55/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/55/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/55/high",
		},
	},

	evolveFrom: {
		en: "Stunky",
		fr: "Moufouette",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 95,
		name: "kirisAki"
	},



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Push Down",
			fr: "Recul",
		},
		text: {
			en: "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Votre adversaire échange son Pokémon Actif avec l'un de ses Pokémon de Banc.",
		},
		damage: 30
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Acid Spray",
			fr: "Bombe Acide",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
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

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
