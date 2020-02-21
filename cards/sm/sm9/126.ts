import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-126",
	localId: 126,

	// Card informations
	name: {
		en: "Persian",
		fr: "Persian",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 53,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/126/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/126/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/126/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/126/high",
		},
	},

	evolveFrom: {
		en: "Meowth",
		fr: "Miaouss",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 22,
		name: "Yukiko Baba"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Make 'Em Pay",
			fr: "Ça Va Payer",
		},
		text: {
			en: "If your opponent has 4 or more cards in their hand, they reveal their hand. Discard cards you find there until your opponent has exactly 4 cards in their hand.",
			fr: "Si votre adversaire a 4 cartes ou plus dans sa main, il montre sa main. Défaussez des cartes que vous y trouvez jusqu’à ce qu’il reste exactement 4 cartes dans la main de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sharp Claws",
			fr: "Griffes Affûtées",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 60 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
