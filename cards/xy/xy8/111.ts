import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-111",
	localId: 111,

	// Card informations
	name: {
		en: "Haxorus",
		fr: "Tranchodon",
	},

	hp: 160,

	type: [
		Type.DRAGON,
	],

	dexId: 612,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/111/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/111/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/111/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/111/high",
		},
	},

	evolveFrom: {
		en: "Fraxure",
		fr: "Incisache",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "hatachu",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dragon Dance",
			fr: "Danse Draco",
		},
		text: {
			en: "As long as this Haxorus is your Active Pokémon, each of its attacks does 100 more damage (before applying Weakness and Resistance). You can't add more than 100 damage in this way.",
			fr: "Tant que ce Tranchodon est votre Pokémon Actif, chacune de ses attaques inflige 100 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance). Vous ne pouvez pas ajouter plus de 100 dégâts de cette façon.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sharp Fang",
			fr: "Croc Aiguisé",
		},
		damage: 60
	},{
		cost: [
			Type.FIGHTING,
			Type.METAL
		],
		name: {
			en: "Dragon Pulse",
			fr: "Dracochoc",
		},
		text: {
			en: "Discard the top 3 cards of your deck.",
			fr: "Défaussez les 3 cartes du dessus de votre deck.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
