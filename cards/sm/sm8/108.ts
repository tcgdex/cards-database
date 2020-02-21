import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-108",
	localId: 108,

	// Card informations
	name: {
		en: "Naganadel",
		fr: "Mandrillon",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 804,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/108/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/108/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/108/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/108/high",
		},
	},

	evolveFrom: {
		en: "Poipole",
		fr: "Vémini",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},

	abilities: [{
		id: 1258,
		type: AbilityType.TALENT,
		name: {
			en: "Charging Up",
			fr: "Recharge",
		},
		text: {
			en: "Once during your turn (before your attack), you may attach a basic Energy card from your discard pile to this Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie de base de votre pile de défausse à ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Turning Point",
			fr: "Point Décisif",
		},
		text: {
			en: "If you have exactly 3 Prize cards remaining, this attack does 80 more damage.",
			fr: "S’il vous reste exactement 3 cartes Récompense, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
