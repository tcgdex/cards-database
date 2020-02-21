import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-28",
	localId: 28,

	// Card informations
	name: {
		en: "Cherrim",
		fr: "Ceriflor",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 421,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/28/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/28/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/28/high",
		},
	},

	evolveFrom: {
		en: "Cherubi",
		fr: "Ceribou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 28,
		name: "match"
	},

	abilities: [{
		id: 907,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Sunny Heal",
			fr: "Guérison solaire",
		},
		text: {
			en: "Once during your turn (before your attack), you may remove 1 damage counter from your Active Pokémon. This power can't be used if Cherrim is affected by a Special Condition.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez retirer un marqueur de dégât de votre Pokémon Actif. Ce pouvoir ne peut pas être utilisé si Ceriflor est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Seed Bomb",
			fr: "Canon graine",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
