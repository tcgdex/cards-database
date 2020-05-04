import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-8",
	localId: 8,

	// Card informations
	name: {
		en: "Smeargle",
		fr: "Queulorior",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 235,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/8/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/8/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/8/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",

	abilities: [{
		id: 665,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Portrait",
			fr: "Portrait",
		},
		text: {
			en: "Once during your turn (before your attack), if Smeargle is your Active Pokémon, you may look at your opponent's hand. If you do, choose a Supporter card you find there and use the effect of that card as the effect of this power. This power can't be used if Smeargle is affected by a Special Condition.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si Queulorior est votre Pokémon Actif, vous pouvez demander à voir la main de votre adversaire. Dans ce cas, choisissez l'une des cartes Supporter qui s'y trouvent et utilisez les effets de cette carte pour ce Poké-Power. Ce pouvoir ne peut pas être utilisé si Queulorior est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tail Rap",
			fr: "Frap'keu",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
