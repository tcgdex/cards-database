import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-26",
	localId: 26,

	// Card informations
	name: {
		en: "Omastar",
		fr: "Amonistar",
	},

	hp: 110,

	type: [
		Type.WATER,
	],

	dexId: 139,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/26/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/26/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/26/high",
		},
	},

	evolveFrom: {
		en: "Omanyte",
		fr: "Amonita",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 28,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Primal Swirl",
			fr: "Tourbillon primitif",
		},
		text: {
			en: "Once during your turn, when you play Omastar from your hand to evolve 1 of your Pokémon, you may remove the highest Stage Evolution card from each of your opponent's Benched Evolved Pokémon and put those cards back into his or her hand. You can't use more than 1 Primal Swirl Poké-Power each turn.",
			fr: "Une seule fois lors de votre tour, lorsque vous jouez Amonistar de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez retirer à chacun des Pokémon Évolués sur le Banc de votre adversaire sa carte au niveau Évolution le plus élevé et replacez ces cartes dans la main de votre adversaire. Vous ne pouvez pas utiliser plus d'1 Poké-Power Tourbillon primitif par tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Send Back",
			fr: "Renvoyer",
		},
		text: {
			en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Votre adversaire échange le Défenseur Pokémon avec 1 de ses Pokémon de Banc.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+30"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
