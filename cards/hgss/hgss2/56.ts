import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-56",
	localId: 56,

	// Card informations
	name: {
		en: "Onix",
		fr: "Onix",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 95,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/56/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/56/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/56/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 46,
		name: "MAHOU"
	},

	abilities: [{
		id: 144,
		type: AbilityType.POKEBODY,
		name: {
			en: "Energy Healer",
			fr: "Guérisseur d'énergie",
		},
		text: {
			en: "Whenever you attach an Energy card from you hand to 1 of your Pokémon, remove 1 damage counter from that Pokémon.",
			fr: "Lorsque vous attachez une carte Énergie de votre main à Onix, retirez-lui 1 marqueur de dégât.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Boundless Power",
			fr: "Puissance illimitée",
		},
		text: {
			en: "Onix can't attack during your next turn.",
			fr: "Pendant votre prochain tour, Onix ne peut pas attaquer.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
