import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-78",
	localId: 78,

	// Card informations
	name: {
		en: "Mudsdale",
		fr: "Bourrinos",
	},

	hp: 130,

	type: [
		Type.FIGHTING,
	],

	dexId: 750,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/78/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/78/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/78/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/78/high",
		},
	},

	evolveFrom: {
		en: "Mudbray",
		fr: "Tiboudet",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Kick Away",
			fr: "Coud’Pied Éjecteur",
		},
		text: {
			en: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
			fr: "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
		},
		damage: 60
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Vigorous Dash",
			fr: "Ruée Vigoureuse",
		},
		text: {
			en: "This Pokémon does 30 damage to itself. This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Ce Pokémon s’inflige 30 dégâts. Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
