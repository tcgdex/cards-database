import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-85",
	localId: 85,

	// Card informations
	name: {
		en: "Slowking",
		fr: "Roigada",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 199,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/85/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/85/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/85/high",
		},
	},

	evolveFrom: {
		en: "Slowpoke",
		fr: "Ramoloss",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Noriko Hotta",

	abilities: [{
		id: 72,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Opponent's Choice",
			fr: "Choix de l'adversaire",
		},
		text: {
			en: "Once during your turn (before your attack), you may reveal the top 2 cards of your deck and your opponent chooses 1 of them. Put that card into your hand and the other card on the bottom of your deck. This power can't be used if Slowking is affected by a Special Condition.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez dévoiler les 2 cartes du dessus de votre deck pour que votre adversaire choisisse l'une d'entre elles. Ajoutez cette carte à votre main et placez l'autre carte au dessous de votre deck. Ce pouvoir ne peut pas être utilisé si Roigada est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Super Psy Bolt",
			fr: "Super psy",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
