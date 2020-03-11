import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-68",
	localId: 68,

	// Card informations
	name: {
		en: "Mienshao",
		fr: "Shaofouine",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 620,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/68/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/68/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/68/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/68/high",
		},
	},

	evolveFrom: {
		en: "Mienfoo",
		fr: "Kungfouine",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Suwama Chiaki",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Haul In",
			fr: "Mainmise",
		},
		text: {
			en: "Search your deck for 2 Pokémon Tool cards, reveal them, and put them into your hand. Shuffle your deck afterward.",
			fr: "Cherchez 2 cartes Outil Pokémon dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Meditate",
			fr: "Yoga",
		},
		text: {
			en: "Does 10 more damage for each damage counter on the Defending Pokémon.",
			fr: "Inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur le Pokémon Défenseur.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
