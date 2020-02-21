import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-16",
	localId: 16,

	// Card informations
	name: {
		en: "Breloom",
		fr: "Chapignon",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 286,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/16/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/16/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/16/high",
		},
	},

	evolveFrom: {
		en: "Shroomish",
		fr: "Balignon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 29,
		name: "Suwama Chiaki"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Dynamic Punch",
			fr: "Dynamopoing",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage and your opponent's Active Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires et le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 40
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Mega Kick",
			fr: "Ultimawashi",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
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
