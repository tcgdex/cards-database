import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-38",
	localId: 38,

	// Card informations
	name: {
		en: "Regirock",
		fr: "Regirock",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 377,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/38/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/38/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/38/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/38/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 122,
		name: "Kazuaki Aihara"
	},

	abilities: [{
		id: 566,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Regi Cycle",
			fr: "Regi-cycle",
		},
		text: {
			en: "Once during your turn (before your attack), if you have a Fighting Energy card in your discard pile, you may discard 2 cards from your hand. Then, attach a Fighting Energy card from your discard pile to Regirock. This power can't be used if Regirock is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si vous possédez une carte Énergie Fighting dans votre pile de défausse, vous pouvez défausser 2 cartes de votre main. Ensuite, attachez une carte Énergie Fighting de votre pile de défausse sur Regirock. Ce pouvoir ne peut pas être utilisé si Regirock est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Stone Edge",
			fr: "Lame de Roc",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 40 damage plus 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts plus 30 dégâts supplémentaires.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card

