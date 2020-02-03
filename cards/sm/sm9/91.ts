import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-91",
	localId: 91,

	// Card informations
	name: {
		en: "Zoroark",
		fr: "Zoroark",
	},

	hp: 110,

	type: [
		Type.DARKNESS,
	],

	dexId: 571,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/91/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/91/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/91/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/91/high.png",
		},
	},

	evolveFrom: {
		en: "Zorua",
		fr: "Zorua",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Taunt",
			fr: "Provoc",
		},
		text: {
			en: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
			fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Night Punishment",
			fr: "Punition Nocturne",
		},
		text: {
			en: "This attack does 20 damage for each Pokémon in your discard pile. You can't do more than 200 damage in this way.",
			fr: "Cette attaque inflige 20 dégâts pour chaque Pokémon dans votre pile de défausse. Vous ne pouvez pas infliger plus de 200 dégâts de cette façon.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
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
		name: "Team Up",
		code: "sm9"
	}
}

export default card

