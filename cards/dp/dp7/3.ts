import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-3",
	localId: 3,

	// Card informations
	name: {
		en: "Infernape",
		fr: "Infernape",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 392,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/3/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/3/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/3/high",
		},
	},

	evolveFrom: {
		en: "Monferno",
		fr: "Chimpenfeu",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 1064,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Blaze Dance",
			fr: "Danse incendiaire",
		},
		text: {
			en: "Once during your turn (before your attack), when you play Infernape from your hand to evolve 1 of your Pokémon, you may flip a coin. If heads, search your deck for up to 4 Fire Energy cards and attach them to your Pokémon in any way you like. Shuffle your deck afterward.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous jouez Simiabraz de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez lancer une pièce. Si c'est face, cherchez dans votre deck jusqu'à 4 cartes Énergie Fire et attachez-les à vos Pokémon de la façon que vous voulez. Ensuite, mélangez votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Close Combat",
			fr: "Combat rapproché",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Infernape by attacks is increased by 30 (after applying Weakness and Resistance).",
			fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à Simiabraz par des attaques sont augmentés de 30 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 60
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spreading Fire",
			fr: "Feu rampant",
		},
		text: {
			en: "Discard 2 Fire Energy attached to Infernape and this attack does 20 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Défaussez 2 Énergies Fire attachées à Simiabraz et cette attaque inflige 20 dégâts à chacun des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+30"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
