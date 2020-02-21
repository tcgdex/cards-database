import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-17",
	localId: 17,

	// Card informations
	name: {
		en: "Incineroar",
		fr: "Félinferno",
	},

	hp: 170,

	type: [
		Type.FIRE,
	],

	dexId: 727,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/17/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/17/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/17/high",
		},
	},

	evolveFrom: {
		en: "Torracat",
		fr: "Matoufeu",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 162,
		name: "Emi Ando"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Profane Punch",
			fr: "Poing Vulgaire",
		},
		text: {
			en: "If your Benched Pokémon have any damage counters on them, this attack does 80 more damage.",
			fr: "Si des marqueurs de dégâts sont placés sur vos Pokémon de Banc, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: 50
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flare Blitz",
			fr: "Boutefeu",
		},
		text: {
			en: "Discard all Fire Energy from this Pokémon.",
			fr: "Défaussez toute l’Énergie Fire de ce Pokémon.",
		},
		damage: 180
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
