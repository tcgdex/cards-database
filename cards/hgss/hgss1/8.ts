import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-8",
	localId: 8,

	// Card informations
	name: {
		en: "Noctowl",
		fr: "Noarfang",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 164,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/8/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/8/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/8/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/8/high.png",
		},
	},

	evolveFrom: {
		en: "Hoothoot",
		fr: "Hoothoot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 29,
		name: "Suwama Chiaki"
	},

	abilities: [{
		id: 1025,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Night Sight",
			fr: "Vision de nuit",
		},
		text: {
			en: "Once during your turn (before your attack), you may draw a card. This power can't be used if Noctowl is affected by a Special Condition.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher une carte. Ce pouvoir ne peut pas être utilisé si Noarfang est affecté par un État spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Extrasensory",
			fr: "Extrasenseur",
		},
		text: {
			en: "If you have the same number of cards in your hand as your opponent, this attack does 40 damage plus 40 more damage.",
			fr: "Si vous avez le même nombre de cartes dans votre main que votre adversaire, cette attaque inflige 40 dégâts plus 40 dégâts supplémentaires.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card

