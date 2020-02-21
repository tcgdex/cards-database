import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-33",
	localId: 33,

	// Card informations
	name: {
		en: "Lopunny",
		fr: "Lockpin",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 428,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/33/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/33/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/33/high",
		},
	},

	evolveFrom: {
		en: "Buneary",
		fr: "Haspiror",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 386,
		type: AbilityType.POKEBODY,
		name: {
			en: "Healing Tail",
			fr: "Queue guérisseuse",
		},
		text: {
			en: "As long as Lopunny is your Active Pokémon, remove 1 damage counter from each of your Benched Pokémon between turns.",
			fr: "Tant que Lockpin est votre Pokémon Actif, retirez à chacun de vos Pokémon de Banc 1 marqueur de dégât entre deux tours.",
		}
	}],

	attacks: [{
		name: {
			en: "Collect",
			fr: "Collectionner",
		},
		text: {
			en: "Draw 3 cards.",
			fr: "Piochez 3 cartes.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cross-Cut",
			fr: "Coupe transversale",
		},
		text: {
			en: "If the Defending Pokémon is an Evolved Pokémon, this attack does 30 damage plus 30 more damage.",
			fr: "Si le Pokémon Défenseur est un Pokémon Évolué, cette attaque inflige 30 dégâts plus 30 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
