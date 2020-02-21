import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-62",
	localId: 62,

	// Card informations
	name: {
		en: "Tyrantrum",
		fr: "Rexillius",
	},

	hp: 150,

	type: [
		Type.FIGHTING,
	],

	dexId: 697,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/62/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/62/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/62/high",
		},
	},

	evolveFrom: {
		en: "Tyrunt",
		fr: "Ptyranidur",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Chew Up",
			fr: "Mâchoires Affamées",
		},
		text: {
			en: "If your opponent's Active Pokémon has any Special Energy attached to it, this attack does 90 more damage.",
			fr: "Si de l'Énergie spéciale est attachée au Pokémon Actif de votre adversaire, cette attaque inflige 90 dégâts supplémentaires.",
		},
		damage: 60
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Giga Impact",
			fr: "Giga Impact",
		},
		text: {
			en: "This Pokémon can't attack during your next turn.",
			fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
