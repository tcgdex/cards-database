import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-146",
	localId: 146,

	// Card informations
	name: {
		en: "Decidueye-GX",
		fr: "Archéduc-GX",
	},

	hp: 240,

	type: [
		Type.GRASS,
	],

	dexId: 724,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/146/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/146/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/146/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/146/high",
		},
	},

	evolveFrom: {
		en: "Dartrix",
		fr: "Efflèche",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 1197,
		type: AbilityType.TALENT,
		name: {
			en: "Feather Arrow",
			fr: "Flèche Empennée",
		},
		text: {
			en: "Once during your turn (before your attack), you may put 2 damage counters on 1 of your opponent's Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer 2 marqueurs de dégâts sur l’un des Pokémon de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Razor Leaf",
			fr: "Tranch’Herbe",
		},
		damage: 90
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Hollow Hunt-GX",
			fr: "Chasse Éthérée-GX",
		},
		text: {
			en: "Put 3 cards from your discard pile into your hand. (You can't use more than 1 GX attack in a game.)",
			fr: "Prenez 3 cartes dans votre pile de défausse et ajoutez-les à votre main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
