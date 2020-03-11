import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-100",
	localId: 100,

	// Card informations
	name: {
		en: "Regigigas",
		fr: "Regigigas LV.X",
	},

	hp: 150,

	type: [
		Type.COLORLESS,
	],

	dexId: 486,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/100/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/100/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/100/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/100/high",
		},
	},

	evolveFrom: {
		fr: "Regigigas LV.X",
	},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Shizurow",

	abilities: [{
		id: 834,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Sacrifice",
			fr: "Sacrifice",
		},
		text: {
			en: "Once during your turn (before your attack), you may choose 1 of your Pokémon in play and that Pokémon is Knocked Out. Then, search your discard pile for up to 2 basic Energy cards, attach them to Regigigas, and remove 8 damage counters from Regigigas. This power can't be used if Regigigas is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez choisir 1 des Pokémon que vous avez en jeu. Ce Pokémon est mis K.O. Ensuite, choisissez dans votre pile de défausse jusqu'à 2 cartes Énergie de base, attachez-les à Regigigas et retirez-lui 8 marqueurs de dégât. Ce pouvoir ne peut pas être utilisé si Regigigas est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.FIGHTING,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Giga Blaster",
			fr: "Giga blaster",
		},
		text: {
			en: "Discard the top card from your opponent's deck. Then, choose 1 card from your opponent's hand without looking and discard it. Regigigas can't use Giga Blaster during your next turn.",
			fr: "Défaussez la carte du dessus du deck de votre adversaire. Ensuite, choisissez sans regarder 1 carte de la main de votre adversaire et défaussez-la. Regigigas ne peut pas utiliser Giga blaster lors de votre prochain tour.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
