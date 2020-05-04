import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-100",
	localId: 100,

	// Card informations
	name: {
		en: "Darkrai & Cresselia LEGEND",
		fr: "Darkrai & Cresselia LÉGENDE",
	},



	type: [
		Type.DARKNESS,
		Type.PSYCHIC,
	],

	dexId: 488,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/100/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/100/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/100/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/100/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEGEND,
	],





	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Lost Crisis",
			fr: "Crise perdue",
		},
		text: {
			en: "Choose 2 Energy attached to Darkrai & Cresselia LEGEND and put them in the Lost Zone. If any of your opponent's Pokémon would be Knocked Out by damage from this attack, put that Pokémon and all cards attached to it in the Lost Zone instead of discarding it.",
			fr: "Choisissez 2 cartes Énergie attachées à Darkrai & Cresselia LÉGENDE et placez-les dans la Zone Perdue. Si l'un des Pokémon de votre adversaire est mis K.O. par cette attaque, placez ce Pokémon et toutes les cartes qui lui sont attachées dans la Zone Perdue au lieu de le défausser.",
		},
		damage: 100
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Moon's Invite",
			fr: "Invitation lunaire",
		},
		text: {
			en: "Move as many damage counters on your opponent's Pokémon as you like to any of your opponent's other Pokémon in any way you like.",
			fr: "Retirez autant de marqueurs de dégât que vous le voulez aux Pokémon de votre adversaire et attribuez-les comme bon vous semble aux autres Pokémon de votre adversaire.",
		},
	},{
		name: {
			fr: "",
		},
		text: {
			fr: "Placez cette carte sur votre Banc uniquement avec l'autre moitié de Darkrai & Cresselia LÉGENDE.",
		},
	},{
		name: {},
		text: {
			fr: "Lorsque ce Pokémon est mis K.O., votre adversaire prend 2 cartes Récompense.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	},{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
