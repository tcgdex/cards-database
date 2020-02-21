import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-113",
	localId: 113,

	// Card informations
	name: {
		en: "Stantler",
		fr: "Cerfrousse",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 234,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/113/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/113/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/113/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/113/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		name: {
			en: "Lead",
			fr: "Avance",
		},
		text: {
			en: "Search your deck for a Supporter card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
			fr: "Choisissez dans votre deck une carte Supporter, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Frighten Horn",
			fr: "Corne qui fait peur",
		},
		text: {
			en: "If the Defending Pokémon isn't an Evolved Pokémon, that Pokémon is now Confused.",
			fr: "Si le Pokémon Défenseur n'est pas un Pokémon Évolué, il est maintenant Confus.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
