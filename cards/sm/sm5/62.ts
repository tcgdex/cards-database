import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-62",
	localId: 62,

	// Card informations
	name: {
		en: "Lunala ◇",
		fr: "Lunala ",
	},

	hp: 160,

	type: [
		Type.PSYCHIC,
	],

	dexId: 792,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/62/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/62/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/62/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/62/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 67,
		name: "Hitoshi Ariga"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Full Moon Star",
			fr: "Étoile Pleine Lune",
		},
		text: {
			en: "For each of your opponent's Pokémon in play, attach a Psychic Energy card from your discard pile to your Pokémon in any way you like.",
			fr: "Pour chaque Pokémon de votre adversaire en jeu, attachez une carte Énergie Psychic de votre pile de défausse à vos Pokémon, de la manière que vous voulez.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Psystorm",
			fr: "Tempête Psy",
		},
		text: {
			en: "This attack does 20 damage times the amount of Energy attached to all Pokémon.",
			fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies attachées aux Pokémon.",
		},
		damage: "20x"
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
