import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-27",
	localId: 27,

	// Card informations
	name: {
		en: "Gengar",
		fr: "Ectoplasma",
	},

	hp: 110,

	type: [
		Type.PSYCHIC,
	],

	dexId: 94,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/27/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/27/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/27/high",
		},
	},

	evolveFrom: {
		en: "Haunter",
		fr: "Spectrum",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Life Drain",
			fr: "Perte d'énergie",
		},
		text: {
			en: "Flip a coin. If heads, put damage counters on the Defending Pokémon until it is 10 HP away from being Knocked Out.",
			fr: "Lancez une pièce. Si c'est face, placez des marqueurs de dégât sur le Pokémon Défenseur jusqu'à ce qu'il ne soit plus qu'à 10 PV d'être mis K.O.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Shadow Dance",
			fr: "Danse d'ombre",
		},
		text: {
			en: "Put 4 damage counters on your opponent's Pokémon in any way you like. Then, switch Gengar with 1 of your Benched Pokémon.",
			fr: "Placez 4 marqueurs de dégât sur les Pokémon de votre adversaire de la façon que vous voulez. Ensuite, échangez Ectoplasma avec 1 de vos Pokémon de Banc.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "+30"
	}],

	resistances: [{
		type: Type.COLORLESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
