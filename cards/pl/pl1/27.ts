import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-27",
	localId: 27,

	// Card informations
	name: {
		en: "Giratina",
		fr: "Giratina",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 487,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/27/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/27/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/27/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Strafe",
			fr: "Bombarder",
		},
		text: {
			en: "You may switch Giratina with 1 of your Benched Pokémon.",
			fr: "Vous pouvez échanger Giratina avec 1 de vos Pokémon de Banc.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Broken-space Blow",
			fr: "Coup espace-brisé",
		},
		text: {
			en: "If the Defending Pokémon is Knocked Out by this attack, put the Defending Pokémon and all cards attached to it in the Lost Zone instead of discarding them.",
			fr: "Si le Pokémon Défenseur est mis K.O par cette attaque, placez le Pokémon Défenseur ainsi que toutes les cartes qui lui sont attachées dans la Zone Perdue au lieu de les défausser.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card
