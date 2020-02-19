import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-71",
	localId: 71,

	// Card informations
	name: {
		en: "Gigalith",
		fr: "Gigalithe",
	},

	hp: 160,

	type: [
		Type.FIGHTING,
	],

	dexId: 526,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/71/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/71/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/71/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/71/high.png",
		},
	},

	evolveFrom: {
		en: "Boldore",
		fr: "Géolithe",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Rock Artillery",
			fr: "Artillerie Roche",
		},
		text: {
			en: "Discard any amount of Fighting Energy from your Pokémon. This attack does 50 damage for each card you discarded in this way.",
			fr: "Défaussez n'importe quel nombre d'Énergies Fighting de vos Pokémon. Cette attaque inflige 50 dégâts pour chaque carte défaussée de cette façon.",
		},
		damage: 50
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rock Tumble",
			fr: "Roule-Pierre",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card

