import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-14",
	localId: 14,

	// Card informations
	name: {
		en: "Kricketune",
		fr: "Mélokrik",
	},

	hp: 100,

	type: [
		Type.GRASS,
	],

	dexId: 402,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/14/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/14/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/14/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/14/high",
		},
	},

	evolveFrom: {
		en: "Kricketot",
		fr: "Crikzik",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 50,
		name: "Anesaki Dynamic"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Improvisational Performance",
			fr: "Performance Improvisée",
		},
		text: {
			en: "If you have exactly 1 card in your hand, this attack does 100 more damage. If you have exactly 3 cards in your hand, your opponent's Active Pokémon is now Confused. If you have exactly 6 cards in your hand, this attack does 30 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "S’il vous reste exactement une carte en main, cette attaque inflige 100 dégâts supplémentaires. S’il vous reste exactement 3 cartes en main, le Pokémon Actif de votre adversaire est maintenant Confus. S’il vous reste exactement 6 cartes en main, cette attaque inflige 30 dégâts à chacun des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
