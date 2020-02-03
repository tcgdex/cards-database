import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-133",
	localId: 133,

	// Card informations
	name: {
		en: "Clefable",
		fr: "Mélodelfe",
	},

	hp: 110,

	type: [
		Type.FAIRY,
	],

	dexId: 36,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/133/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/133/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/133/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/133/high.png",
		},
	},

	evolveFrom: {
		en: "Clefairy",
		fr: "Mélofée",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 29,
		name: "Suwama Chiaki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Moon-Watching Dance",
			fr: "Danse au Clair de Lune",
		},
		text: {
			en: "This attack does 30 more damage for each of your Pokémon that has any Fairy Energy attached to it.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chacun de vos Pokémon auquel de l’Énergie Fairy est attachée.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card

