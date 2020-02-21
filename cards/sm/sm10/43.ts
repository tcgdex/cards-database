import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-43",
	localId: 43,

	// Card informations
	name: {
		en: "Slowbro",
		fr: "Flagadoss",
	},

	hp: 120,

	type: [
		Type.WATER,
	],

	dexId: 80,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/43/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/43/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/43/high",
		},
	},

	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Yawn",
			fr: "Bâillement",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Three Strikes",
			fr: "Triple Risque",
		},
		text: {
			en: "Flip 3 coins. This attack does 100 damage for each heads. If all of them are tails, you lose this game.",
			fr: "Lancez 3 pièces. Cette attaque inflige 100 dégâts pour chaque côté face. S’il n’y a que des côtés pile, vous perdez cette partie.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
