import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-53",
	localId: 53,

	// Card informations
	name: {
		en: "Weepinbell",
		fr: "Boustiflor",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 70,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/53/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/53/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/53/high",
		},
	},

	evolveFrom: {
		en: "Bellsprout",
		fr: "Chetiflor",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Poisonpowder",
			fr: "Poudre Toxik",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
			fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Corrode Target",
			fr: "Visée corrosive",
		},
		text: {
			en: "Filp a coin. If heads, look at your opponent's hand, choose 1 card, and discard it.",
			fr: "Lancez une pièce. Si c'est face, regardez la main de votre adversaire, choisissez une carte et défaussez-la.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
