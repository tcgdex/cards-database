import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-70",
	localId: 70,

	// Card informations
	name: {
		en: "Milotic",
		fr: "Milobellus",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 350,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/70/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/70/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/70/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/70/high",
		},
	},

	evolveFrom: {
		en: "Feebas",
		fr: "Barpau",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hajime Kusajima",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Cleansing Ring",
			fr: "Cercle nettoyant",
		},
		text: {
			en: "You may discard 2 cards from your hand. If you do, remove 4 damage counters from 1 of your Pokémon.",
			fr: "Vous pouvez défausser 2 cartes de votre main. Retirez alors à 1 de vos Pokémon 4 marqueurs de dégât.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Scale Blow",
			fr: "Coup d'écaille",
		},
		text: {
			en: "Does 90 damage minus 10 damage for each card in your hand.",
			fr: "Inflige 90 dégâts moins 10 dégâts pour chaque carte se trouvant dans votre main.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
