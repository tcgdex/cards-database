import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-149",
	localId: 149,

	// Card informations
	name: {
		en: "Persian-GX",
		fr: "Persian-GX",
	},

	hp: 200,

	type: [
		Type.COLORLESS,
	],

	dexId: 53,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/149/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/149/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/149/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/149/high",
		},
	},

	evolveFrom: {
		en: "Meowth",
		fr: "Miaouss",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "PLANETA Igarashi",

	abilities: [{
		id: 506,
		type: AbilityType.TALENT,
		name: {
			en: "Cat Walk",
			fr: "Marche Féline",
		},
		text: {
			en: "Once during your turn (before your attack), if 1 of your Pokémon-GX or Pokémon-EX was Knocked Out during your opponent's last turn, you may search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck. You can't use more than 1 Cat Walk Ability each turn.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si l’un de vos Pokémon-GX ou Pokémon-EX a été mis K.O. pendant le dernier tour de votre adversaire, vous pouvez chercher jusqu’à 2 cartes dans votre deck, puis les ajouter à votre main. Mélangez ensuite votre deck. Vous ne pouvez utiliser plus d’un talent Marche Féline par tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Vengeance",
			fr: "Rétorsion",
		},
		text: {
			en: "This attack does 20 more damage for each Pokémon in your discard pile. You can't add more than 180 damage in this way.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon dans votre pile de défausse. Vous ne pouvez pas ajouter plus de 180 dégâts de cette façon.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slash Back-GX",
			fr: "Retour de Frappe-GX",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
