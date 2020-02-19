import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-146",
	localId: 146,

	// Card informations
	name: {
		en: "Ribombee",
		fr: "Rubombelle",
	},

	hp: 60,

	type: [
		Type.FAIRY,
	],

	dexId: 743,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/146/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/146/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/146/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/146/high.png",
		},
	},

	evolveFrom: {
		en: "Cutiefly",
		fr: "Bombydou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 80,
		name: "Hasuno"
	},

	abilities: [{
		id: 1106,
		type: AbilityType.TALENT,
		name: {
			en: "Mysterious Buzz",
			fr: "Bourdonnement Mystérieux",
		},
		text: {
			en: "As long as this Pokémon is on your Bench, whenever your opponent plays a Supporter card from their hand, prevent all effects of that card done to your Fairy Pokémon in play.",
			fr: "Tant que ce Pokémon est sur votre Banc, chaque fois que votre adversaire joue une carte Supporter de sa main, évitez tous les effets que cette carte peut infliger à vos Pokémon Fairy en jeu.",
		}
	}],

	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Stampede",
			fr: "Ruée",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

