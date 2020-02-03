import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-69",
	localId: 69,

	// Card informations
	name: {
		en: "Magneton",
		fr: "Magnéton",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 82,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/69/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/69/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/69/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/69/high.png",
		},
	},

	evolveFrom: {
		en: "Magnemite",
		fr: "Magnéti",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},

	abilities: [{
		id: 1315,
		type: AbilityType.TALENT,
		name: {
			en: "Call Signal",
			fr: "Signal d’Appel",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for up to 3 Supporter cards, reveal them, and put them into your hand. Then, shuffle your deck. If you searched your deck in this way, this Pokémon is Knocked Out.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher jusqu’à 3 cartes Supporter dans votre deck, les montrer, puis les ajouter à votre main. Mélangez ensuite votre deck. Si vous avez cherché votre deck de cette façon, ce Pokémon est mis K.O.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Magnetic Blast",
			fr: "Explosion Magnétique",
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

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

