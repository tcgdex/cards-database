import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-5",
	localId: 5,

	// Card informations
	name: {
		en: "Pachirisu",
		fr: "Pachirisu",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 417,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/5/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/5/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/5/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hironobu Yoshida",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Call for Family",
			fr: "Appel à la famille",
		},
		text: {
			en: "Search your deck for up to 3 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
			fr: "Choisissez dans votre deck jusqu'à 3 Pokémon de Base et placez-les sur votre Banc. Ensuite, mélangez votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Smash Short",
			fr: "Smash court",
		},
		text: {
			en: "If the Defending Pokémon has a Pokémon Tool card attached to it, this attack does 10 damage plus 30 more damage. Discard that Pokémon Tool card, look at your opponent's hand, and discard any Pokémon Tool cards of the same name you find there.",
			fr: "Si le Pokémon Défenseur possède une carte Outil Pokémon, cette attaque inflige 10 dégâts plus 30 dégâts supplémentaires. Défaussez cette carte Outil Pokémon, regardez la main de votre adversaire et défaussez les cartes Outil Pokémon du même nom se trouvant dans sa main.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],

	resistances: [{
		type: Type.METAL,
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
