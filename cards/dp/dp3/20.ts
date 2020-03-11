import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-20",
	localId: 20,

	// Card informations
	name: {
		en: "Venusaur",
		fr: "Florizarre",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 3,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/20/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/20/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/20/high",
		},
	},

	evolveFrom: {
		en: "Ivysaur",
		fr: "Herbizarre",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kazuyuki Kano",

	abilities: [{
		id: 321,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Miracle Aroma",
			fr: "Arôme miracle",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, choose either Asleep, Burned, or Poisoned. The Defending Pokémon is now affected by that Special Condition. This power can't be used if Venusaur is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c'est pile, choisissez Endormi, Brûlé ou Empoisonné. Le Pokémon Défenseur est maintenant affecté par cet État Spécial. Ce pouvoir ne peut pas être utilisé si Florizarre est affecté par un État Spécial.",
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
			fr: "Pousse géante",
		},
		text: {
			en: "Flip a coin. If heads, remove 4 damage counters from Venusaur.",
			fr: "Lancez une pièce. Si c'est pile, retirez à Florizarre 4 marqueurs de dégât.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+30"
	}],



	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
