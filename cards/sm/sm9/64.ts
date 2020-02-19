import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-64",
	localId: 64,

	// Card informations
	name: {
		en: "Alolan Marowak",
		fr: "Ossatueur d’Alola",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 105,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/64/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/64/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/64/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/64/high.png",
		},
	},

	evolveFrom: {
		en: "Cubone",
		fr: "Osselait",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 146,
		name: "miki kudo"
	},



	attacks: [{
		name: {
			en: "Limbo Limbo",
			fr: "Limbo Limbo",
		},
		text: {
			en: "Search your deck for up to 2 basic Energy cards and attach them to your Pokémon in any way you like. Then, shuffle your deck.",
			fr: "Cherchez jusqu’à 2 cartes Énergie de base dans votre deck et attachez-les à vos Pokémon, de la manière que vous voulez. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Alolan Club",
			fr: "Club d’Alola",
		},
		text: {
			en: "This attack does 20 damage for each of your Pokémon in play that has Alolan in its name.",
			fr: "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon en jeu avec « d’Alola » dans son nom.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card

