import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-76",
	localId: 76,

	// Card informations
	name: {
		en: "Skuntank",
		fr: "Moufflair",
	},

	hp: 120,

	type: [
		Type.DARKNESS,
	],

	dexId: 435,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/76/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/76/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/76/high",
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
		id: 121,
		name: "Studio Bora Inc."
	},



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Sticky Smokescreen",
			fr: "Brouillard Collant",
		},
		text: {
			en: "If the Defending Pokémon tries to attack during your opponent's next turn, your opponent flips 2 coins. If either of them is tails, that attack does nothing.",
			fr: "Si le Pokémon Défenseur essaie d’attaquer pendant le prochain tour de votre adversaire, ce dernier lance 2 pièces. S’il obtient au moins un côté pile, cette attaque ne fait rien.",
		},
		damage: 50
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Hammer In",
			fr: "Enfoncement",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
