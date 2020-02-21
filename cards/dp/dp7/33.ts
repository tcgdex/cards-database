import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-33",
	localId: 33,

	// Card informations
	name: {
		en: "Budew",
		fr: "Budew",
	},

	hp: 40,

	type: [
		Type.PSYCHIC,
	],

	dexId: 406,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/33/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/33/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/33/high",
		},
	},

	evolveFrom: {
		fr: "Rozbouton",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},

	abilities: [{
		id: 544,
		type: AbilityType.POKEBODY,
		name: {
			en: "Poison Enzyme",
			fr: "Enzyme empoisonné",
		},
		text: {
			en: "Prevent all effects of attacks, including damage, done to Budew by your opponent's Poisoned Pokémon.",
			fr: "Prévenez tous les effets d'attaques, dégâts inclus, infligés à Rozbouton par les Pokémon Empoisonnés de votre adversaire.",
		}
	}],

	attacks: [{
		name: {
			en: "Buddy-buddy",
			fr: "Copain-copain",
		},
		text: {
			en: "Search your deck for a Pokémon, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
			fr: "Choisissez un Pokémon dans votre deck, montrez-le à votre adversaire et placez-le dans votre main. Ensuite, mélangez votre deck.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
