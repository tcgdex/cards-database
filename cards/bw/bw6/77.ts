import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-77",
	localId: 77,

	// Card informations
	name: {
		en: "Skuntank",
		fr: "Moufflair",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 435,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/77/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/77/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/77/high",
		},
	},

	evolveFrom: {
		en: "Stunky",
		fr: "Moufouette",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Smogscreen",
			fr: "Brouillard Venimeux",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned. If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips a coin. If tails, that attack does nothing.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné. Si le Pokémon Défenseur essaie d'attaquer pendant le prochain tour de votre adversaire, ce dernier lance une pièce. Si c'est pile, son attaque ne fait rien.",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Hammer In",
			fr: "Enfoncer",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
