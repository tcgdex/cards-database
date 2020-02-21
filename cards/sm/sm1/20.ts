import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-20",
	localId: 20,

	// Card informations
	name: {
		en: "Tsareena",
		fr: "Sucreine",
	},

	hp: 140,

	type: [
		Type.GRASS,
	],

	dexId: 763,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/20/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/20/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/20/high",
		},
	},

	evolveFrom: {
		en: "Steenee",
		fr: "Candine",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},

	abilities: [{
		id: 693,
		type: AbilityType.TALENT,
		name: {
			en: "Queenly Majesty",
			fr: "Prestance Royale",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may have your opponent reveal their hand. Then, discard a card from it.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez demander à votre adversaire de montrer sa main. Puis défaussez-en une carte.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Trop Kick",
			fr: "Botte Sucrette",
		},
		text: {
			en: "Heal 20 damage and remove all Special Conditions from this Pokémon.",
			fr: "Soignez 20 dégâts et retirez tous les États Spéciaux de ce Pokémon.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
