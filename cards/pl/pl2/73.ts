import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-73",
	localId: 73,

	// Card informations
	name: {
		en: "Nidorina",
		fr: "Nidorina Niv. 29",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 30,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/73/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/73/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/73/high",
		},
	},

	evolveFrom: {
		en: "Nidoran♀",
		fr: "Nidoran♀",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Jump Tackle",
			fr: "Charge aérienne",
		},
		text: {
			en: "Nidorina does 10 damage to itself, and don't apply Weakness and Resistance to this damage.",
			fr: "Nidorina s'inflige 10 dégâts. N'appliquez pas la Faiblesse et la Résistance à ces dégâts.",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Stress Poison",
			fr: "Poison de stress",
		},
		text: {
			en: "If Nidorina has any damage counters on it, this attack does 40 damage plus 20 more damage and the Defending Pokémon is now Poisoned.",
			fr: "Si Nidorina possède des marqueurs de dégât, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Empoisonné.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card
