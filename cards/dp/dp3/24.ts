import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-24",
	localId: 24,

	// Card informations
	name: {
		en: "Dugtrio",
		fr: "Triopikeur",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 51,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/24/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/24/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/24/high",
		},
	},

	evolveFrom: {
		en: "Diglett",
		fr: "Taupiqueur",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Dig Trap",
			fr: "Creuse-piège",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing. If heads, prevent all effects of an attack, including damage, done to Dugtrio during your opponent's next turn. If Dugtrio is your Active Pokémon at the end of your opponent's next turn, put 6 damage counters on 1 of your opponent's Benched Pokémon.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet. Si c'est face, prévenez tous les effets d'une attaque, dégâts inclus, infligés à Triopikeur lors du prochain tour de votre adversaire. Si Triopikeur est votre Pokémon Actif à la fin du prochain tour de votre adversaire, placez 6 marqueurs de dégât sur 1 des Pokémon de Banc de votre adversaire.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Pit Trap",
			fr: "Trou piégé",
		},
		text: {
			en: "Your opponent flips a coin. If tails, this attack does 50 damage plus 50 more damage.",
			fr: "Votre adversaire lance une pièce. Si c'est pile, cette attaque inflige 50 dégâts plus 50 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
