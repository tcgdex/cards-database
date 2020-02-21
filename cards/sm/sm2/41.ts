import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-41",
	localId: 41,

	// Card informations
	name: {
		en: "Alolan Graveler",
		fr: "Gravalanch d’Alola",
	},

	hp: 110,

	type: [
		Type.LIGHTNING,
	],

	dexId: 75,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/41/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/41/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/41/high",
		},
	},

	evolveFrom: {
		en: "Alolan Geodude",
		fr: "Racaillou d’Alola",
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
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Thunder Punch",
			fr: "Poing-Éclair",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage. If tails, this Pokémon does 20 damage to itself.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts supplémentaires. Si c’est pile, ce Pokémon s’inflige 20 dégâts.",
		},
		damage: 50
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Electrobullet",
			fr: "Électrojectile",
		},
		text: {
			en: "This attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
