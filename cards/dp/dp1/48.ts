import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-48",
	localId: 48,

	// Card informations
	name: {
		en: "Elekid",
		fr: "Elekid",
	},

	hp: 40,

	type: [
		Type.LIGHTNING,
	],

	dexId: 239,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/48/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/48/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/48/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/48/high",
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

	abilities: [{
		id: 23,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Baby Evolution",
			fr: "Évolution bébé",
		},
		text: {
			en: "Once during your turn (before your attack), you may put Electabuzz from your hand onto Elekid (this counts as evolving Elekid) and remove all damage counters from Elekid.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez placer Elektek de votre main sur Elekid (vous le faites ainsi évoluer) et retirer à Elekid tous ses marqueurs de dégât.",
		}
	}],

	attacks: [{
		name: {
			en: "Outlet",
			fr: "Exutoire",
		},
		text: {
			en: "Search your deck for a Lightning Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
			fr: "Cherchez dans votre deck une carte Énergie Lightning, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
