import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-141",
	localId: 141,

	// Card informations
	name: {
		en: "Absol G",
		fr: "Absol ",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 359,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/141/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/141/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/141/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/141/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
		Tag.SP,
	],

	illustrator: "Yusuke Ishikawa",

	abilities: [{
		id: 199,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Darkness Send",
			fr: "Envoi obscur",
		},
		text: {
			en: "Once during your turn (before your attack), when you put Absol G LV.X from your hand onto your Active Absol G, you may flip 3 coins. For each heads, put the top card from your opponent's deck in the Lost Zone.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), lorsque vous placez Absol  NIV.X de votre main sur votre Absol  Actif, vous pouvez lancer 3 pièces. Pour chaque face, placez la carte du dessus du deck de votre adversaire dans la Zone Perdue.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Darkness Slugger",
			fr: "Joueur obscur",
		},
		text: {
			en: "You may discard a card from your hand. If you do, this attack does 30 damage plus 30 more damage.",
			fr: "Vous pouvez défausser une carte de votre main. Cette attaque inflige alors 30 dégâts plus 30 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
