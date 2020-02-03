import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-49",
	localId: 49,

	// Card informations
	name: {
		en: "Porygon2",
		fr: "Porygon2",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 233,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/49/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/49/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/49/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/49/high.png",
		},
	},

	evolveFrom: {
		en: "Porygon",
		fr: "Porygon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 90,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Mapping",
			fr: "Mappage",
		},
		text: {
			en: "Once during your turn, when you play Porygon2 from your hand to evolve 1 of your Pokémon, you may search your deck for a Stadium card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
			fr: "Une seule fois pendant votre tour, lorsque vous jouez Porygon2 dans votre main pour faire évoluer l'un de vos Pokémon, vous pouvez chercher une carte Stade dans votre deck, la montrer à votre adversaire et l'ajouter à votre main. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "3-D Attack",
			fr: "Attaque en 3-D",
		},
		text: {
			en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card

