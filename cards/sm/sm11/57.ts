import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-57",
	localId: 57,

	// Card informations
	name: {
		en: "Alolan Raichu",
		fr: "Raichu d’Alola",
	},

	hp: 110,

	type: [
		Type.LIGHTNING,
	],

	dexId: 26,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/57/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/57/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/57/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/57/high.png",
		},
	},

	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Electro Rain",
			fr: "Électro-Pluie",
		},
		text: {
			en: "Discard any amount of Lightning Energy from this Pokémon. Then, for each Energy you discarded in this way, choose 1 of your opponent's Pokémon and do 30 damage to it. (You can choose the same Pokémon more than once.) This damage isn't affected by Weakness or Resistance.",
			fr: "Défaussez n’importe quel nombre d’Énergies Lightning de ce Pokémon. Ensuite, pour chaque Énergie défaussée de cette façon, choisissez l’un des Pokémon de votre adversaire et infligez-lui 30 dégâts. (Vous pouvez choisir le même Pokémon plusieurs fois.) Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Electric Ball",
			fr: "Boule de Foudre",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

