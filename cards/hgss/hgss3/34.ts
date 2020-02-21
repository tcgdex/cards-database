import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-34",
	localId: 34,

	// Card informations
	name: {
		en: "Raticate",
		fr: "Rattatac",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 20,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/34/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/34/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/34/high",
		},
	},

	evolveFrom: {
		en: "Rattata",
		fr: "Rattata",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 12,
		name: "Sachiko Adachi"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Razor-Sharp Incisors",
			fr: "Incisives aiguisées",
		},
		text: {
			en: "Does 10 damage times the number of damage counters on the Defending Pokémon.",
			fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégât sur le Pokémon Défenseur.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Gnaw Up",
			fr: "Rongetout",
		},
		text: {
			en: "Discard a Special Energy card attached to the Defending Pokémon.",
			fr: "Défaussez une carte Énergie spéciale attachée au Pokémon Défenseur.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
