import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-91",
	localId: 91,

	// Card informations
	name: {
		en: "Magearna",
		fr: "Magearna",
	},

	hp: 90,

	type: [
		Type.METAL,
	],

	dexId: 801,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/91/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/91/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/91/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/91/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},

	abilities: [{
		id: 1346,
		type: AbilityType.TALENT,
		name: {
			en: "Change Clothes",
			fr: "Changement de Tenue",
		},
		text: {
			en: "Once during your turn (before your attack), you may put a Pokémon Tool card attached to 1 of your Pokémon into your hand.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer une carte Outil Pokémon attachée à l’un de vos Pokémon dans votre main.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rolling Attack",
			fr: "Attaque Qui Roule",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card

