import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-96",
	localId: 96,

	// Card informations
	name: {
		en: "Excadrill",
		fr: "Minotaupe",
	},

	hp: 100,

	type: [
		Type.METAL,
	],

	dexId: 530,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/96/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/96/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/96/high",
		},
	},

	evolveFrom: {
		en: "Drilbur",
		fr: "Rototaupe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Drill Run",
			fr: "Tunnelier",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Straight Claw",
			fr: "Griffe Rectiligne",
		},
		text: {
			en: "You may discard an Energy attached to this Pokémon. If you do, this attack does 30 more damage.",
			fr: "Vous pouvez défausser une Énergie attachée à ce Pokémon. Dans ce cas, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
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
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
