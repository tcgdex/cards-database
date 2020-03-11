import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-93",
	localId: 93,

	// Card informations
	name: {
		en: "Gardevoir-GX",
		fr: "Gardevoir-GX",
	},

	hp: 230,

	type: [
		Type.FAIRY,
	],

	dexId: 282,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/93/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/93/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/93/high",
		},
	},

	evolveFrom: {
		en: "Kirlia",
		fr: "Kirlia",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 1134,
		type: AbilityType.TALENT,
		name: {
			en: "Secret Spring",
			fr: "Rebond Secret",
		},
		text: {
			en: "Once during your turn (before your attack), you may attach a Fairy Energy card from your hand to 1 of your Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Fairy de votre main à l’un de vos Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Infinite Force",
			fr: "Force Infinie",
		},
		text: {
			en: "This attack does 30 damage times the amount of Energy attached to both Active Pokémon.",
			fr: "Cette attaque inflige 30 dégâts multipliés par le nombre d’Énergies attachées aux deux Pokémon Actifs.",
		},
		damage: 30
	},{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Twilight-GX",
			fr: "Tombée de la Nuit-GX",
		},
		text: {
			en: "Shuffle 10 cards from your discard pile into your deck. (You can't use more than 1 GX attack in a game.)",
			fr: "Mélangez 10 cartes de votre pile de défausse avec votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
