import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-89",
	localId: 89,

	// Card informations
	name: {
		en: "Gabite",
		fr: "Carmache",
	},

	hp: 80,

	type: [
		Type.DRAGON,
	],

	dexId: 444,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/89/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/89/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/89/high",
		},
	},

	evolveFrom: {
		en: "Gible",
		fr: "Griknot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},

	abilities: [{
		id: 799,
		type: AbilityType.TALENT,
		name: {
			en: "Dragon Call",
			fr: "Appel du Dragon",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for a Dragon Pokémon, reveal it, and put it into your hand. Shuffle your deck afterward.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher un Pokémon Dragon dans votre deck, le montrer et l'ajouter à votre main. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.FIGHTING
		],
		name: {
			en: "Dragonslice",
			fr: "Draco-Tranche",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
