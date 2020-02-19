import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-65",
	localId: 65,

	// Card informations
	name: {
		en: "Banette",
		fr: "Branette",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 354,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/65/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/65/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/65/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/65/high.png",
		},
	},

	evolveFrom: {
		en: "Shuppet",
		fr: "Polichombr",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 147,
		name: "Eri Yamaki"
	},

	abilities: [{
		id: 587,
		type: AbilityType.TALENT,
		name: {
			en: "Red Eyes",
			fr: "Regard Rouge",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put a Basic Pokémon from your opponent's discard pile onto their Bench.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez placer l’un des Pokémon de base de la pile de défausse de votre adversaire sur son Banc.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Enemy Show",
			fr: "Spectacle Ennemi",
		},
		text: {
			en: "For each of your opponent's Pokémon in play, put 1 damage counter on your opponent's Pokémon in any way you like.",
			fr: "Pour chaque Pokémon en jeu de votre adversaire, placez un marqueur de dégâts sur les Pokémon de votre adversaire de la manière que vous voulez.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card

