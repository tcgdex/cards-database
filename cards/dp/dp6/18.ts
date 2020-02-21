import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-18",
	localId: 18,

	// Card informations
	name: {
		en: "Armaldo",
		fr: "Armaldo",
	},

	hp: 140,

	type: [
		Type.FIGHTING,
	],

	dexId: 348,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/18/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/18/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/18/high",
		},
	},

	evolveFrom: {
		en: "Anorith",
		fr: "Anorith",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 122,
		name: "Kazuaki Aihara"
	},

	abilities: [{
		id: 380,
		type: AbilityType.POKEBODY,
		name: {
			en: "Fossil Armor",
			fr: "Armure fossile",
		},
		text: {
			en: "If Armaldo would be damaged by an attack, prevent that attack's damage done to Armaldo if that damage is 60 or less.",
			fr: "Si une attaque inflige des dégâts à Armaldo, prévenez les dégâts de cette attaque si ces dégâts sont de 60 ou moins.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Crush Claw",
			fr: "Éclategriffe",
		},
		text: {
			en: "During your next turn, if an attack does damage to the Defending Pokémon (after applying Weakness and Resistance), that attack does 40 more damage.",
			fr: "Lors de votre prochain tour, si une attaque inflige des dégâts au Pokémon Défenseur (après application de la Faiblesse et de la Résistance), cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+30"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
