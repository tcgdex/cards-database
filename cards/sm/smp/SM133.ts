import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM133",
	localId: "SM133",

	// Card informations
	name: {
		en: "Thundurus-GX",
		fr: "Fulguris-GX",
	},

	hp: 180,

	type: [
		Type.LIGHTNING,
	],

	dexId: 642,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM133/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM133/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM133/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM133/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Charge",
			fr: "Chargeur",
		},
		text: {
			en: "Search your deck for a Lightning Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez une carte Énergie Lightning dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			en: "Electric Ball",
			fr: "Boule de Foudre",
		},
		damage: 140
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			en: "Thundering Hurricane-GX",
			fr: "Rafale d’Éclairs-GX",
		},
		text: {
			en: "Flip 4 coins. This attack does 100 damage for each heads. (You can't use more than 1 GX attack in a game.)",
			fr: "Lancez 4 pièces. Cette attaque inflige 100 dégâts multipliés par le nombre de côtés face. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
