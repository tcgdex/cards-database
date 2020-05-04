import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-13",
	localId: 13,

	// Card informations
	name: {
		en: "Forretress",
		fr: "Foretress",
	},

	hp: 80,

	type: [
		Type.METAL,
	],

	dexId: 205,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/13/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/13/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/13/high",
		},
	},

	evolveFrom: {
		en: "Pineco",
		fr: "Pomdepik",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Spike Spread",
			fr: "Volée de piques",
		},
		text: {
			en: "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Gyro Ball",
			fr: "Gyroballe",
		},
		text: {
			en: "You may switch Forretress with 1 of your Benched Pokémon. If you do, your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Vous pouvez échanger Foretress avec un des Pokémon de votre Banc. Dans ce cas, votre adversaire échange le Pokémon Défenseur avec l’un des Pokémon de son Banc.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
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
