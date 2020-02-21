import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-33",
	localId: 33,

	// Card informations
	name: {
		en: "Emboar",
		fr: "Roitiflam",
	},

	hp: 170,

	type: [
		Type.FIRE,
	],

	dexId: 500,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/33/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/33/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/33/high",
		},
	},

	evolveFrom: {
		en: "Pignite",
		fr: "Grotichon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},

	abilities: [{
		id: 1302,
		type: AbilityType.TALENT,
		name: {
			en: "Explosive Fire Dance",
			fr: "Danse du Feu Explosive",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may look at the top 8 cards of your deck and attach any number of basic Energy cards you find there to your Pokémon in any way you like. Shuffle the other cards back into your deck.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez regarder les 8 cartes du dessus de votre deck, puis attacher le nombre désiré de cartes Énergie de base trouvées à vos Pokémon, de la manière que vous voulez. Mélangez les autres cartes avec votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heat Blast",
			fr: "Explosion de Chaleur",
		},
		damage: 160
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
