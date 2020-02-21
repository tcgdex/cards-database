import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-91",
	localId: 91,

	// Card informations
	name: {
		en: "Granbull",
		fr: "Granbull",
	},

	hp: 110,

	type: [
		Type.FAIRY,
	],

	dexId: 210,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/91/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/91/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/91/high",
		},
	},

	evolveFrom: {
		en: "Snubbull",
		fr: "Snubbull",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 29,
		name: "Suwama Chiaki"
	},



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Dark Clamp",
			fr: "Pince des Ténèbres",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fight Back",
			fr: "Rendre les Coups",
		},
		text: {
			en: "If this Pokémon has any damage counters on it, this attack does 80 more damage.",
			fr: "Si des marqueurs de dégâts sont placés sur ce Pokémon, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: 50
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

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
