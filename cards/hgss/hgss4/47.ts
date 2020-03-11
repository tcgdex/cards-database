import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-47",
	localId: 47,

	// Card informations
	name: {
		en: "Pidgeotto",
		fr: "Roucoups",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 17,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/47/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/47/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/47/high",
		},
	},

	evolveFrom: {
		en: "Pidgey",
		fr: "Roucool",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Suwama Chiaki",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gust",
			fr: "Tornade",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Twister",
			fr: "Ouragan",
		},
		text: {
			en: "Flip 2 coins. If both of them are tails, this attack does nothing. For each heads, discard an Energy attached to the Defending Pokémon.",
			fr: "Lancez 2 pièces. Si vous obtenez deux fois un côté pile, cette attaque ne fait rien. Pour chaque face, défaussez une Énergie attachée au Pokémon Défenseur.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
