import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-120",
	localId: 120,

	// Card informations
	name: {
		en: "Genesect-EX",
		fr: "Genesect-EX",
	},

	hp: 180,

	type: [
		Type.METAL,
	],

	dexId: 649,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/120/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/120/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/120/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/120/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},

	abilities: [{
		id: 1420,
		type: AbilityType.TALENT,
		name: {
			en: "Drive Change",
			fr: "Change Module",
		},
		text: {
			en: "Once during your turn (before your attack), you may put a Pokémon Tool card attached to this Pokémon into your hand.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer une carte Outil Pokémon attachée à ce Pokémon dans votre main.",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.METAL
		],
		name: {
			en: "Rapid Blaster",
			fr: "Canon Rapide",
		},
		text: {
			en: "Discard as many Metal Energy attached to this Pokémon as you like. This attack does 20 more damage for each Energy card discarded in this way.",
			fr: "Défaussez autant d'Énergies Metal attachées à ce Pokémon que vous voulez. Cette attaque inflige 20 dégâts supplémentaires pour chaque carte Énergie défaussée de cette façon.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareUltra,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card

