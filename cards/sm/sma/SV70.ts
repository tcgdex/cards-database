import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV70",
	localId: "SV70",

	// Card informations
	name: {
		en: "Darkrai-GX",
		fr: "Darkrai-GX",
	},

	hp: 180,

	type: [
		Type.DARKNESS,
	],

	dexId: 491,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV70/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV70/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV70/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV70/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 1135,
		type: AbilityType.TALENT,
		name: {
			en: "Restoration",
			fr: "Renouveau",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is in your discard pile, you may put it onto your Bench. Then, attach a Darkness Energy card from your discard pile to this Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon se trouve dans votre pile de défausse, vous pouvez le placer sur votre Banc. Ensuite, attachez une carte Énergie Darkness de votre pile de défausse à ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Dark Cleave",
			fr: "Pénombre Pourfendue",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 130
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Dead End-GX",
			fr: "Sans Issue-GX",
		},
		text: {
			en: "If your opponent's Active Pokémon is affected by a Special Condition, that Pokémon is Knocked Out. (You can't use more than 1 GX attack in a game.)",
			fr: "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, ce dernier est mis K.O. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
