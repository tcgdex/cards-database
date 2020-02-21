import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-8",
	localId: 8,

	// Card informations
	name: {
		en: "Vileplume",
		fr: "Rafflesia",
	},

	hp: 140,

	type: [
		Type.GRASS,
	],

	dexId: 45,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/8/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/8/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/8/high",
		},
	},

	evolveFrom: {
		en: "Gloom",
		fr: "Ortide",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 29,
		name: "Suwama Chiaki"
	},

	abilities: [{
		id: 44,
		type: AbilityType.TALENT,
		name: {
			en: "Varied Pollen",
			fr: "Pollens Variés",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, choose Asleep, Burned, Confused, or Poisoned. Your opponent's Active Pokémon is now affected by that Special Condition.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, choisissez entre Brûlé, Confus, Empoisonné ou Endormi. Le Pokémon Actif de votre adversaire est maintenant affecté par cet État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Giant Bloom",
			fr: "Pousse Géante",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
