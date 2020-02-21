import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-70",
	localId: 70,

	// Card informations
	name: {
		en: "Gengar",
		fr: "Ectoplasma",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 94,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/70/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/70/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/70/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/70/high",
		},
	},

	evolveFrom: {
		en: "Haunter",
		fr: "Spectrum",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 143,
		name: "so-taro"
	},

	abilities: [{
		id: 440,
		type: AbilityType.TALENT,
		name: {
			en: "Shadow Pain",
			fr: "Douleur Ombre",
		},
		text: {
			en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may put 6 damage counters on your opponent's Pokémon-GX and Pokémon-EX in any way you like.",
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez placer 6 marqueurs de dégâts sur les Pokémon-GX et Pokémon-EX de votre adversaire, de la manière que vous voulez.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Twilight Poison",
			fr: "Poison Nocturne",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep and Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné et Endormi.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
