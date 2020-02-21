import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-90",
	localId: 90,

	// Card informations
	name: {
		en: "Rayquaza & Deoxys LEGEND",
		fr: "Rayquaza & Deoxys LÉGENDE",
	},



	type: [
		Type.COLORLESS,
		Type.PSYCHIC,
	],

	dexId: 384,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/90/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/90/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/90/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEGEND,
	],



	abilities: [{
		id: 1048,
		type: AbilityType.POKEBODY,
		name: {
			en: "Space Virus",
			fr: "Virus spatial",
		},
		text: {
			en: "If your opponent's Pokémon is Knocked Out by damage from an attack of Rayquaza & Deoxys LEGEND, take 1 more Prize card.",
			fr: "Si le Pokémon de votre adversaire est mis K.O. par une attaque de Rayquaza & Deoxys LÉGENDE, prenez une carte Récompense supplémentaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Ozone Buster",
			fr: "Châtiment stellaire",
		},
		text: {
			en: "Discard all Fire Energy attached to Rayquaza & Deoxys LEGEND.",
			fr: "Défaussez toutes les cartes Énergie Fire attachées à Rayquaza & Deoxys LÉGENDE.",
		},
		damage: 150
	},{
		name: {
			fr: "",
		},
		text: {
			fr: "Placez cette carte sur votre Banc uniquement avec l'autre moitié de Rayquaza & Deoxys LÉGENDE.",
		},
	},{
		name: {},
		text: {
			fr: "Lorsque ce Pokémon est mis K.O., votre adversaire prend 2 cartes Récompense.",
		},
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	},{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.LEGEND,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
