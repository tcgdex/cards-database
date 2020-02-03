import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-16",
	localId: 16,

	// Card informations
	name: {
		en: "Honchkrow",
		fr: "Corboss",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 430,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/16/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/16/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/16/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/16/high.png",
		},
	},

	evolveFrom: {
		en: "Murkrow",
		fr: "Cornebre",
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
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Shadow Bind",
			fr: "Étreinte d'ombre",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite durant le prochain tour de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Vengeance",
			fr: "Vengeance",
		},
		text: {
			en: "Does 10 damage plus 10 more damage for each Darkness Pokémon in your discard pile.",
			fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chacun des Pokémon Darkness de votre pile de défausse.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card

