import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-23",
	localId: 23,

	// Card informations
	name: {
		en: "Jolteon",
		fr: "Voltali",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 135,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/23/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/23/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/23/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/23/high.png",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Thunder Fang",
			fr: "Crocs Éclair",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé.",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Lightning Strike",
			fr: "Frap'éclair",
		},
		text: {
			en: "You may discard 2 Energy attached to Jolteon. If you do, this attack's base damage is 90 instead of 50.",
			fr: "Vous pouvez défausser 2 Énergies attachées à Voltali. Les dégâts de base de cette attaque sont alors de 90 au lieu de 50.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card

