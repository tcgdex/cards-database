import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-95",
	localId: 95,

	// Card informations
	name: {
		en: "Oricorio-GX",
		fr: "Plumeline-GX",
	},

	hp: 170,

	type: [
		Type.PSYCHIC,
	],

	dexId: 741,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/95/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/95/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/95/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "aky CG Works",

	abilities: [{
		id: 1376,
		type: AbilityType.TALENT,
		name: {
			en: "Dance of Tribute",
			fr: "Danse Respectueuse",
		},
		text: {
			en: "Once during your turn (before your attack), if any of your Pokémon were Knocked Out during your opponent's last turn, you may draw 3 cards. You can't use more than 1 Dance of Tribute Ability each turn.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si l’un de vos Pokémon a été mis K.O. pendant le dernier tour de votre adversaire, vous pouvez piocher 3 cartes. Vous ne pouvez pas utiliser plus d’un talent Danse Respectueuse par tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Razor Wing",
			fr: "Aile Tranchante",
		},
		damage: 80
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Strafe-GX",
			fr: "Bombarder-GX",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
