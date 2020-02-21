import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-145",
	localId: 145,

	// Card informations
	name: {
		en: "Alolan Ninetales",
		fr: "Feunard d’Alola",
	},

	hp: 110,

	type: [
		Type.FAIRY,
	],

	dexId: 38,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/145/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/145/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/145/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/145/high",
		},
	},

	evolveFrom: {
		en: "Alolan Vulpix",
		fr: "Goupix d’Alola",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 147,
		name: "Eri Yamaki"
	},



	attacks: [{
		name: {
			en: "Rubbish Blizzard",
			fr: "Blizzard de Déchets",
		},
		text: {
			en: "This attack does 10 damage for each Pokémon Tool card in your discard pile.",
			fr: "Cette attaque inflige 10 dégâts pour chaque carte Outil Pokémon dans votre pile de défausse.",
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

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
