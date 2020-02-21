import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-21",
	localId: 21,

	// Card informations
	name: {
		en: "Grovyle",
		fr: "Massko",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 253,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/21/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/21/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/21/high",
		},
	},

	evolveFrom: {
		en: "Treecko",
		fr: "Arcko",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 6,
		name: "Ayaka Yoshida"
	},

	abilities: [{
		id: 870,
		type: AbilityType.TALENT,
		name: {
			en: "Sunshine Grace",
			fr: "Grâce Solaire",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for a Grass Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher un Pokémon Grass dans votre deck, le montrer, puis l’ajouter à votre main. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Slicing Blade",
			fr: "Lame Tranchante",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
