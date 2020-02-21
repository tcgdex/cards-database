import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-83",
	localId: 83,

	// Card informations
	name: {
		en: "Beldum",
		fr: "Terhal",
	},

	hp: 50,

	type: [
		Type.METAL,
	],

	dexId: 374,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/83/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/83/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/83/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},

	abilities: [{
		id: 414,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Metal Chain",
			fr: "Chaine métallique",
		},
		text: {
			en: "Once during your turn (before your attack), when you attach a Metal Energy card from your hand to Beldum (excluding effects of attacks or Poké-Powers), you may search your deck for Beldum and put it onto your Bench. Shuffle your deck afterward. This power can't be used if Beldum is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous attachez une carte Énergie Metal de votre main à Terhal (effets d'attaques ou Poké-Powers exclus), vous pouvez chercher Terhal dans votre deck et le placer sur votre Banc. Ensuite, mélangez votre deck. Ce pouvoir ne peut pas être utilisé si Terhal est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Take Down",
			fr: "Bélier",
		},
		text: {
			en: "Beldum does 10 damage to itself.",
			fr: "Terhal s'inflige 10 dégâts.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
