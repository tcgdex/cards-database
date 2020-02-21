import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-12",
	localId: 12,

	// Card informations
	name: {
		en: "Rhyperior",
		fr: "Rhinastoc",
	},

	hp: 140,

	type: [
		Type.FIGHTING,
	],

	dexId: 464,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/12/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/12/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/12/high",
		},
	},

	evolveFrom: {
		en: "Rhydon",
		fr: "Rhinoféros",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 16,
		name: "Nakaoka"
	},

	abilities: [{
		id: 15,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Earth Fissure",
			fr: "Fissure terrestre",
		},
		text: {
			en: "Once during your turn, when you play Rhyperior from your hand to evolve 1 of your Pokémon, you may discard the top 3 cards from your opponent's deck.",
			fr: "Une seule fois lors de votre tour, lorsque vous jouez Rhinastoc de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez défausser les 3 cartes du dessus du deck de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Rock Wrecker",
			fr: "Roc-Boulet",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness or Resistance. Rhyperior can't attack during your next turn.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse et la Résistance. Rhinastoc ne pourra pas attaquer lors de votre prochain tour.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+30"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
