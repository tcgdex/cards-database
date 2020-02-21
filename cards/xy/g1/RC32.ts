import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-RC32",
	localId: "RC32",

	// Card informations
	name: {
		en: "Sylveon-EX",
		fr: "Nymphali-EX",
	},

	hp: 170,

	type: [
		Type.FAIRY,
	],

	dexId: 700,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC32/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/RC32/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/RC32/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dress Up",
			fr: "Costumes",
		},
		text: {
			en: "If this Pokémon has a Pokémon Tool card attached to it, this attack does 30 more damage.",
			fr: "Si une carte Outil Pokémon est attachée à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 30
	},{
		cost: [
			Type.FAIRY,
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Precious Ribbon",
			fr: "Ruban Précieux",
		},
		text: {
			en: "Move a Fairy Energy from this Pokémon to 1 of your Benched Pokémon. If you do, heal 50 damage from that Pokémon.",
			fr: "Déplacez une Énergie Fairy de ce Pokémon vers l'un de vos Pokémon de Banc. Dans ce cas, soignez 50 dégâts au Pokémon choisi.",
		},
		damage: 100
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

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
