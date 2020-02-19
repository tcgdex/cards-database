import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-46",
	localId: 46,

	// Card informations
	name: {
		en: "Machamp GL",
		fr: "Mackogneur  Niv. 64",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 68,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/46/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/46/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/46/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/46/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cross-Cut",
			fr: "Coupe transversale",
		},
		text: {
			en: "If the Defending Pokémon is an Evolved Pokémon, this attack does 30 damage plus 20 more damage.",
			fr: "Si le Pokémon Défenseur est un Pokémon Évolué, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Brush Off",
			fr: "Lancer",
		},
		text: {
			en: "Put the Defending Pokémon and all cards attached to it on top of your opponent's deck. Your opponent shuffles his or her deck afterward. (If your opponent doesn't have any Benched Pokémon, this attack does nothing.)",
			fr: "Placez le Pokémon Défenseur ainsi que toutes les cartes qui lui sont attachées au dessus du deck de votre adversaire. Celui-ci mélange ensuite son deck. (Si votre adversaire ne possède pas de Pokémon de Banc, cette attaque est sans effet).",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card

