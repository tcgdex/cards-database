import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-98",
	localId: 98,

	// Card informations
	name: {
		en: "Diggersby",
		fr: "Excavarenne",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 660,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/98/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/98/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/98/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/98/high",
		},
	},

	evolveFrom: {
		en: "Bunnelby",
		fr: "Sapereau",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mina Nakai",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mountaintop Mining",
			fr: "Mine des Sommets",
		},
		text: {
			en: "You may do 40 more damage. If you do, discard the top 2 cards of your deck.",
			fr: "Vous pouvez infliger 40 dégâts supplémentaires. Dans ce cas, défaussez les 2 cartes du dessus de votre deck.",
		},
		damage: 60
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rock Cannon",
			fr: "Canon à Pierres",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 80 damage for each heads.",
			fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 80 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
