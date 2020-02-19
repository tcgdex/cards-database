import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-19",
	localId: 19,

	// Card informations
	name: {
		en: "Pyroar",
		fr: "Némélios",
	},

	hp: 120,

	type: [
		Type.FIRE,
	],

	dexId: 668,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/19/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/19/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/19/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/19/high.png",
		},
	},

	evolveFrom: {
		en: "Litleo",
		fr: "Hélionceau",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},

	abilities: [{
		id: 1141,
		type: AbilityType.TALENT,
		name: {
			en: "Unnerve",
			fr: "Tension",
		},
		text: {
			en: "Whenever your opponent plays an Item or Supporter card from their hand, prevent all effects of that card done to this Pokémon.",
			fr: "Chaque fois que votre adversaire joue une carte Objet ou Supporter de sa main, évitez tous les effets de cette carte sur ce Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dominating Fangs",
			fr: "Crocs Imposants",
		},
		text: {
			en: "If Lysandre Labs is in play, this attack does 60 more damage.",
			fr: "Si Labos Lysandre est en jeu, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card

