import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-4",
	localId: 4,

	// Card informations
	name: {
		en: "Darkrai",
		fr: "Darkrai",
	},

	hp: 80,

	type: [
		Type.DARKNESS,
	],

	dexId: 491,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/4/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/4/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/4/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Darkness Roar",
			fr: "Rugissement obscur",
		},
		text: {
			en: "You may have your opponent switch the Defending Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Vous pouvez demander à votre adversaire d'échanger le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
		},
		damage: 10
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Sleep Hole",
			fr: "Trou-dodo",
		},
		text: {
			en: "If the Defending Pokémon is Asleep, this attack does 40 damage plus 40 more damage. If the Defending Pokémon is not Asleep, that Pokémon is now Asleep.",
			fr: "Si le Pokémon Défenseur est Endormi, cette attaque inflige 40 dégâts plus 40 dégâts supplémentaires. Si le Pokémon Défenseur n'est pas Endormi, il est maintenant Endormi.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
