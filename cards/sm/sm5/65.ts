import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-65",
	localId: 65,

	// Card informations
	name: {
		en: "Rampardos",
		fr: "Charkos",
	},

	hp: 150,

	type: [
		Type.FIGHTING,
	],

	dexId: 409,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/65/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/65/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/65/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/65/high",
		},
	},

	evolveFrom: {
		en: "Cranidos",
		fr: "Kranidos",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 71,
		name: "Yoshinobu Saito"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Clean Hit",
			fr: "Coup Net",
		},
		text: {
			en: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 60 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 60
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Wild Crash",
			fr: "Collision Agitée",
		},
		text: {
			en: "If your opponent's Active Pokémon is a Basic Pokémon, it is Knocked Out.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon de base, il est mis K.O.",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
