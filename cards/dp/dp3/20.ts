import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/dp/dp3/20/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/20/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/20/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/20/high.png",
		},
	},

	evolveFrom: {
		en: "Ivysaur",
		fr: "Herbizarre",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 97,
		name: "Kazuyuki Kano"
	},

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

