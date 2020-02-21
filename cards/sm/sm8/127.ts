import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-127",
	localId: 127,

	// Card informations
	name: {
		en: "Dialga",
		fr: "Dialga",
	},

	hp: 130,

	type: [
		Type.METAL,
	],

	dexId: 483,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/127/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/127/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/127/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/127/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 65,
		name: "nagimiso"
	},



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Turn Back Time",
			fr: "Retour Dans le Temps",
		},
		text: {
			en: "If your opponent's Active Pokémon is an evolved Pokémon, devolve it by putting the highest Stage Evolution card on it into your opponent's hand.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon évolué, faites-le dés-évoluer en mettant la carte Évolution la plus élevée placée dessus dans la main de votre adversaire.",
		},
		damage: 60
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Power Blast",
			fr: "Violente Déflagration",
		},
		text: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
