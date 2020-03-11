import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-49",
	localId: 49,

	// Card informations
	name: {
		en: "Unown Q",
		fr: "Zarbi Q",
	},

	hp: 30,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/49/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/49/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/49/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kent Kanetsuna",

	abilities: [{
		id: 595,
		type: AbilityType.POKEPOWER,
		name: {
			en: "QUICK",
			fr: "QUICK",
		},
		text: {
			en: "Once during your turn (before your attack), if Unown Q is on your Bench, you may discard all cards attached to Unown Q and attach Unown Q to 1 of your Pokémon as a Pokémon Tool card. As long as Unown Q is attached to a Pokémon, you pay Colorless less to retreat that Pokémon.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi Q est sur votre Banc, vous pouvez défausser toutes les cartes qui lui sont attachées et attachez Zarbi Q à 1 de vos Pokémon comme carte Outil Pokémon. Tant que Zarbi Q est attachée à 1 Pokémon, vous payez 1 Colorless de moins pour le faire battre en retraite.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Hidden Power",
			fr: "Puissance cachée",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
