import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-119",
	localId: 119,

	// Card informations
	name: {
		en: "Dragonite",
		fr: "Dracolosse",
	},

	hp: 160,

	type: [
		Type.DRAGON,
	],

	dexId: 149,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/119/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/119/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/119/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/119/high",
		},
	},

	evolveFrom: {
		en: "Dragonair",
		fr: "Draco",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 64,
		name: "Megumi Mizutani"
	},

	abilities: [{
		id: 697,
		type: AbilityType.TALENT,
		name: {
			en: "Fast Call",
			fr: "Appel Rapide",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher une carte Supporter dans votre deck, la montrer, puis l’ajouter à votre main. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Claw",
			fr: "Dracogriffe",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
