import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/dp/dp4/5/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/5/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/5/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/5/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 60,
		name: "Hironobu Yoshida"
	},



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

