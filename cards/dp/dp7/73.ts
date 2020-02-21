import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-73",
	localId: 73,

	// Card informations
	name: {
		en: "Skorupi",
		fr: "Skorupi",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 451,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/73/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/73/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/73/high",
		},
	},

	evolveFrom: {
		fr: "Rapion",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 12,
		name: "Sachiko Adachi"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Stalk",
			fr: "Traquer",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Dangerous Claw",
			fr: "Griffe dangereuse",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, the Defending Pokémon is now Poisoned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé. Si c'est pile, le Pokémon Défenseur est maintenant Empoisonné.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
