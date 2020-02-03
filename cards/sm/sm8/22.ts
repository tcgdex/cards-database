import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-22",
	localId: 22,

	// Card informations
	name: {
		en: "Sceptile-GX",
		fr: "Jungko-GX",
	},

	hp: 230,

	type: [
		Type.GRASS,
	],

	dexId: 254,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/22/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/22/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/22/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/22/high.png",
		},
	},

	evolveFrom: {
		en: "Grovyle",
		fr: "Massko",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 71,
		name: "Yoshinobu Saito"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Mach Cut",
			fr: "Coupe Vive",
		},
		text: {
			en: "Discard a Special Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
		},
		damage: 60
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Leaf Cyclone",
			fr: "Cyclone Feuillu",
		},
		text: {
			en: "Move a Grass Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez une Énergie Grass de ce Pokémon vers l’un de vos Pokémon de Banc.",
		},
		damage: 130
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Jungle Heal-GX",
			fr: "Jungle Cicatrisante-GX",
		},
		text: {
			en: "Heal all damage from each of your Pokémon that has any Grass Energy attached to it. (You can't use more than 1 GX attack in a game.)",
			fr: "Soignez tous les dégâts à chacun de vos Pokémon auquel de l’Énergie Grass est attachée. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHoloGX,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card

