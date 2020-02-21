import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-113",
	localId: 113,

	// Card informations
	name: {
		en: "Bewear",
		fr: "Chelours",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 760,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/113/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/113/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/113/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/113/high",
		},
	},

	evolveFrom: {
		en: "Stufful",
		fr: "Nounourson",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},

	abilities: [{
		id: 1152,
		type: AbilityType.TALENT,
		name: {
			en: "Rake It In",
			fr: "Ça Rapporte",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may draw 3 cards.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez piocher 3 cartes.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dangerous Blow",
			fr: "Coup Dangereux",
		},
		text: {
			en: "If your opponent's Active Pokémon is a Basic Pokémon, this attack does 60 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon de base, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
