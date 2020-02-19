import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-56",
	localId: 56,

	// Card informations
	name: {
		en: "Oricorio",
		fr: "Plumeline",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 741,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/56/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/56/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/56/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/56/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Supernatural Dance",
			fr: "Danse Surnaturelle",
		},
		text: {
			en: "For each Pokémon in your opponent's discard pile, put 1 damage counter on your opponent's Pokémon in any way you like.",
			fr: "Pour chaque Pokémon dans la pile de défausse de votre adversaire, placez un marqueur de dégâts sur les Pokémon de votre adversaire de la manière que vous voulez.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Revelation Dance",
			fr: "Danse Éveil",
		},
		text: {
			en: "If there is no Stadium card in play, this attack does nothing.",
			fr: "S’il n’y a pas de carte Stade en jeu, cette attaque ne fait rien.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card

