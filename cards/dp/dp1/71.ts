import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-71",
	localId: 71,

	// Card informations
	name: {
		en: "Bonsly",
		fr: "Manzai",
	},

	hp: 40,

	type: [
		Type.FIGHTING,
	],

	dexId: 438,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/71/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/71/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/71/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/71/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},

	abilities: [{
		id: 23,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Baby Evolution",
			fr: "Évolution bébé",
		},
		text: {
			en: "Once during your turn (before your attack), you may put Sudowoodo from your hand onto Bonsly (this counts as evolving Bonsly) and remove all damage counters from Bonsly.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Simularbre de votre main sur Manzai  (vous le faites ainsi évoluer) et retirer à Bonsly tous ses marqueurs de dégât.",
		}
	}],

	attacks: [{
		name: {
			en: "Fake Tears",
			fr: "Croco Larme",
		},
		text: {
			en: "Flip a coin. If heads, your opponent can't play any Trainer cards from his or her hand during your opponent's next turn, and any damage done to Bonsly by attacks is reduced by 30 (after applying Weakness and Resistance).",
			fr: "Lancez une pièce. Si c'est face, votre adversaire ne peut pas jouer de cartes Dresseur de sa main lors de son prochain tour et tous dégâts infligés à Manzai  par des attaques sont réduits de 30 (après application de la Faiblesse et de la Résistance).",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
