import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-155",
	localId: 155,

	// Card informations
	name: {
		en: "Sylveon",
		fr: "Nymphali",
	},

	hp: 110,

	type: [
		Type.FAIRY,
	],

	dexId: 700,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/155/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/155/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/155/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/155/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 23,
		name: "Naoyo Kimura"
	},



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Moonblast",
			fr: "Pouvoir Lunaire",
		},
		text: {
			en: "During your opponent's next turn, the Defending Pokémon's attacks do 30 less damage (before applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 30
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Beloved Pulse",
			fr: "Impulsion Aimée",
		},
		text: {
			en: "If you played a TAG TEAM Supporter card from your hand during this turn, this attack does 80 more damage.",
			fr: "Si vous avez joué une carte Supporter ESCOUADE de votre main pendant ce tour, cette attaque inflige 80 dégâts supplémentaires.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
