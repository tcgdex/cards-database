import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-96",
	localId: 96,

	// Card informations
	name: {
		en: "Magnezone",
		fr: "Magnézone",
	},

	hp: 140,

	type: [
		Type.LIGHTNING,
	],

	dexId: 462,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/96/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/96/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/96/high",
		},
	},

	evolveFrom: {
		en: "Magneton",
		fr: "Magneton",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Noriko Hotta",

	abilities: [{
		id: 128,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Magnetic Draw",
			fr: "Pioche magnétique",
		},
		text: {
			en: "Once during your turn (before your attack), you may draw cards until you have 6 cards in your hand. This power can't be used if Magnezone is affected by a Special Condition.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez piocher jusqu'à ce que vous ayez 6 cartes en main. Ce Poké-Power ne peut pas être utilisé si Magnézone est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Lost Burn",
			fr: "Brûlure perdue",
		},
		text: {
			en: "Put as many Energy cards attached to your Pokémon as you like in the Lost Zone. This attack does 50 damage times the number of Energy cards put in the Lost Zone in this way.",
			fr: "Placez autant de cartes Énergie attachées à vos Pokémon que vous le souhaitez dans la Zone Perdue. Cette attaque inflige 50 dégâts multipliés par le nombre de cartes Énergie que vous avez ainsi placées dans la Zone Perdue.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
