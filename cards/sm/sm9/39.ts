import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-39",
	localId: 39,

	// Card informations
	name: {
		en: "Electrode",
		fr: "Électrode",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 101,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/39/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/39/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/39/high",
		},
	},

	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 115,
		name: "Asako Ito"
	},

	abilities: [{
		id: 1279,
		type: AbilityType.TALENT,
		name: {
			en: "Electro Shaker",
			fr: "Shaker Électrique",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may move any number of Lightning Energy from your Pokémon to your other Pokémon in any way you like.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez déplacer autant d’Énergie Lightning que vous voulez de vos Pokémon vers vos autres Pokémon, de la manière que vous voulez.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Speed Ball",
			fr: "Balle Rapide",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
