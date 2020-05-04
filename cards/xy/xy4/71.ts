import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-71",
	localId: 71,

	// Card informations
	name: {
		en: "Diancie",
		fr: "Diancie",
	},

	hp: 90,

	type: [
		Type.FAIRY,
	],

	dexId: 719,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/71/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/71/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/71/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/71/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Sparkle",
			fr: "Éclat",
		},
		text: {
			en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
			fr: "Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c’est pile, son attaque ne fait rien.",
		},
	},{
		cost: [
			Type.FAIRY,
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Diamond Storm",
			fr: "Orage Adamantin",
		},
		text: {
			en: "Heal 30 damage from each of your Fairy Pokémon.",
			fr: "Soignez 30 dégâts à chacun de vos Pokémon Fairy.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
