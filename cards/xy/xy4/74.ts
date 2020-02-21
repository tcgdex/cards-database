import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-74",
	localId: 74,

	// Card informations
	name: {
		en: "Hydreigon",
		fr: "Trioxhydre",
	},

	hp: 140,

	type: [
		Type.DRAGON,
	],

	dexId: 635,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/74/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/74/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/74/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/74/high",
		},
	},

	evolveFrom: {
		en: "Zweilous",
		fr: "Diamat",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 623,
		type: AbilityType.TALENT,
		name: {
			en: "Dark Impulse",
			fr: "Impulsion Obscure",
		},
		text: {
			en: "Once during your turn (before your attack), you may attach a Darkness Energy card from your discard pile to your Active Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Darkness de votre pile de défausse à votre Pokémon Actif.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crazy Headbutt",
			fr: "Coup d'Boule Fou",
		},
		text: {
			en: "Discard an Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie attachée à ce Pokémon.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
