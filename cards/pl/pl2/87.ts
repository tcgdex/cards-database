import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-87",
	localId: 87,

	// Card informations
	name: {
		en: "Weezing",
		fr: "Smogogo Niv. 47",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 110,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/87/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/87/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/87/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/87/high.png",
		},
	},

	evolveFrom: {
		en: "Koffing",
		fr: "Smogo",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 461,
		type: AbilityType.POKEBODY,
		name: {
			en: "Camouflage Gas",
			fr: "Gaz de camouflage",
		},
		text: {
			en: "If Weezing is Confused and is Knocked Out, your opponent can't take a Prize card.",
			fr: "Si Smogogo est Confus et qu'il est mis K.O, votre adversaire ne peut pas récolter de carte Récompense.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Damage Breakdown",
			fr: "Casse-dégâts",
		},
		text: {
			en: "Count the number of damage counters on Weezing. Put that many damage counters on the Defending Pokémon and Weezing is now Confused.",
			fr: "Comptabilisez le nombre de marqueurs de dégât sur Smogogo. Placez autant de marqueurs de dégât sur le Pokémon Défenseur et Smogogo est maintenant Confus.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Smog",
			fr: "Purédpois",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
		},
		damage: 20
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

