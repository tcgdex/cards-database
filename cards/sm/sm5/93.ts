import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-93",
	localId: 93,

	// Card informations
	name: {
		en: "Shiinotic",
		fr: "Lampignon",
	},

	hp: 100,

	type: [
		Type.FAIRY,
	],

	dexId: 756,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/93/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/93/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/93/high",
		},
	},

	evolveFrom: {
		en: "Morelull",
		fr: "Spododo",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},

	abilities: [{
		id: 1222,
		type: AbilityType.TALENT,
		name: {
			en: "Illuminate",
			fr: "Lumiattirance",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for a Fairy Pokémon, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher un Pokémon Fairy dans votre deck, le montrer, puis l’ajouter à votre main. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Flickering Spores",
			fr: "Spores Scintillantes",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
