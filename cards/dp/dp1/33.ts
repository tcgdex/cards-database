import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-33",
	localId: 33,

	// Card informations
	name: {
		en: "Munchlax",
		fr: "Goinfrex",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 446,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/33/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/33/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/33/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 23,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Baby Evolution",
			fr: "Évolution bébé",
		},
		text: {
			en: "Once during your turn (before your attack), you may put Snorlax from your hand onto Munchlax (this counts as evolving Munchlax) and remove all damage counters from Munchlax.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Ronflex de votre main sur Goinfrex  (vous le faites ainsi évoluer) et retirer à Goinfrex  tous ses marqueurs de dégât.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Heave",
			fr: "Soulèvement",
		},
		text: {
			en: "Discard 2 cards from your hand. (If you can't discard 2 cards, this attack does nothing.) Flip 2 coins. This attack does 30 damage times the number of heads.",
			fr: "Défaussez 2 cartes de votre main. (Si vous ne pouvez pas défausser 2 cartes, cette attaque est sans effet.) Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
