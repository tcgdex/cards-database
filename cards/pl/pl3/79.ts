import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-79",
	localId: 79,

	// Card informations
	name: {
		en: "Relicanth",
		fr: "Relicanth",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 369,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/79/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/79/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/79/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sumiyoshi Kizuki",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Grand Swell",
			fr: "Forte houle",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon for each Pokémon Tool card and Stadium card your opponent has in play. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 30 dégâts pour chaque carte Outil Pokémon et carte Stade que votre adversaire a en jeu. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.FIGHTING,
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
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
