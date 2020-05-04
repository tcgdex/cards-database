import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-9",
	localId: 9,

	// Card informations
	name: {
		en: "Mamoswine",
		fr: "Mammochon",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 473,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/9/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/9/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/9/high",
		},
	},

	evolveFrom: {
		en: "Piloswine",
		fr: "Keifel",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ice Fang",
			fr: "Crocs Givre",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed and discard an Energy card attached to the Defending Pokémon.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé et défaussez une carte Énergie attachée au Pokémon Défenseur.",
		},
		damage: 40
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Charge Through",
			fr: "Charge transperçante",
		},
		text: {
			en: "You may do 60 damage plus 40 more damage and 40 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) If you do, Mamoswine does 40 damage to itself.",
			fr: "Vous pouvez infliger 60 dégâts plus 40 dégâts supplémentaires et 40 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.) Mammochon s'inflige alors 40 dégâts.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "+40"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
