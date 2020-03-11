import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-39",
	localId: 39,

	// Card informations
	name: {
		en: "Togetic",
		fr: "Togetic",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 176,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/39/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/39/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/39/high",
		},
	},

	evolveFrom: {
		en: "Togepi",
		fr: "Togepi",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Chase Up",
			fr: "Relancer",
		},
		text: {
			en: "Search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.",
			fr: "Cherchez une carte dans votre deck et placez-la dans votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fly",
			fr: "Vol",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing. If heads, prevent all effects of attacks, including damage, done to Togetic during your opponent's next turn.",
			fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien. Si c'est face, évitez tous les effets d'attaques (y compris les dégâts) infligés à Togetic pendant le prochain tour de votre adversaire.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
