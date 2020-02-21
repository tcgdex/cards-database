import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-19",
	localId: 19,

	// Card informations
	name: {
		en: "Ninetales",
		fr: "Feunard",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 38,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/19/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/19/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/19/high",
		},
	},

	evolveFrom: {
		en: "Vulpix",
		fr: "Goupix",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 54,
		name: "Hideaki Hakozaki"
	},

	abilities: [{
		id: 488,
		type: AbilityType.TALENT,
		name: {
			en: "Bright Look",
			fr: "Regard Alerte",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon, you may switch 1 of your opponent's Benched Pokémon with his or her Active Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer 1 de vos Pokémon, vous pouvez échanger 1 des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Hexed Flame",
			fr: "Flamme Maudite",
		},
		text: {
			en: "Does 50 more damage for each Special Condition affecting the Defending Pokémon.",
			fr: "Inflige 50 dégâts supplémentaires pour chaque État Spécial affectant le Pokémon Défenseur.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
