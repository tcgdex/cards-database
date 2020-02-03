import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-32",
	localId: 32,

	// Card informations
	name: {
		en: "Bibarel",
		fr: "Bibarel",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 400,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/32/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/32/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/32/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/32/high.png",
		},
	},

	evolveFrom: {
		en: "Bidoof",
		fr: "Keunotor",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},

	abilities: [{
		id: 1071,
		type: AbilityType.POKEBODY,
		name: {
			en: "Unaware",
			fr: "Inconscient",
		},
		text: {
			en: "Prevent all effects of attacks, excluding damage, done to Bibarel.",
			fr: "Prévenez tous les effets d'attaques, dégâts exclus, infligés à Castorno.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Amnesia",
			fr: "Amnésie",
		},
		text: {
			en: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
			fr: "Choisissez 1 des attaques du Pokémon Défenseur. Ce Pokémon ne peut pas utiliser cette attaque lors du prochain tour de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Surf",
			fr: "Surf",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+30"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card

